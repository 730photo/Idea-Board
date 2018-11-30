import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const StyledHome = styled.div`
    text-align: center;
    background-image: url('https://i.imgur.com/aQlR54I.jpg');
    background-size: cover;
    color: blueviolet;
    -webkit-text-stroke: 1px #112F41;
    /* padding: 10px 10px; */
    height: 100vh;
`

const Styled = styled.body`
    font-family: 'Acme', sans-serif;
`


const StyledButton = styled.button`
    width: 50px;
    border-radius: 3px;
    margin: auto;
`

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledHead = styled.h1`
    font-size: 4vw;
    text-align: center;
`

const StyledIdeaContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10% 0% 20% 0%;
`

const StyledIdea = styled.div`
    background-color: rgb(255, 255, 136);
    border-radius: 3%;
    width: 150px;
    min-width: 150px;
    min-height: 150px;
    margin: 5%;
    padding: 1%;
`

const StyledIdeaDescription = styled.textarea`
    padding: 2%;
    margin-top: 20px;
    background-color: transparent;
	  border: 0px solid;
		width: 140px;
`

class IdeaBoard extends Component {
  state = {
    user: {},
    ideas: []
  }

  //This function will be called so that when we want to view a user's ideas, we can get to the right user and list only that user's ideas

  getUser = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({user: response.data, ideas: response.data.ideas.reverse() })
  }

  //This will call the getUser function once the component has mounted

  componentDidMount = () => {
    this.getUser()
  }

  //This function is how we add the new idea on any specific user's idea board to the api

  handleNew = async () => {
    const userId = this.props.match.params.userId
    const newIdea = await axios.post(`/api/users/${userId}/ideas`)
    console.log(newIdea)
    await this.getUser()
  }

  //This function will remove a selected idea from the api

  handleDelete = async (ideaId) => {
    const userId = this.props.match.params.userId
    await axios.delete(`/api/users/${userId}/ideas/${ideaId}`)
    await this.getUser()
  }

  //This function will reset state with changed information within an idea

  handleChange = (event, i) => {
    const ideas = [...this.state.ideas]
    ideas[i][event.target.name] = event.target.value
    this.setState({ideas})
  }

  //This function will update the information of an idea within the api

  updateIdea = async (i) => {
    const userId = this.props.match.params.userId
    const updatedIdea = this.state.ideas[i]
    await axios.put(`/api/users/${userId}/ideas/${updatedIdea._id}`, updatedIdea)
  }

  //This is where we will render idea board information to the page

  render() {

  //This map function will cycle through each idea in state, and take the index

    const ideasList = this.state.ideas.map((idea, i) => {
      return (
      
        <StyledIdea key={i}>
          <div onClick={() => this.handleDelete(idea._id)}>X</div>
          <StyledIdeaDescription type="text" name="description" value={idea.description} onChange={(event) => this.handleChange(event, i)} onBlur={() => this.updateIdea(i)}/>
        </StyledIdea>
      )
    })
    return (
      <Styled>
        <StyledHome>
      <StyledContainer>
      <StyledHead>{this.state.user.userName}</StyledHead>
        <StyledButton onClick={this.handleNew}>NEW</StyledButton>
        <StyledIdeaContainer>{ideasList}</StyledIdeaContainer>
      </StyledContainer>
      </StyledHome>
      </Styled>
      
    )
  }
}

export default IdeaBoard;