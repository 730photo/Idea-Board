import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

//The following through line 45 is styling for the IdeaBoard

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
      <StyledContainer>
      <StyledHead>{this.state.user.userName}</StyledHead>
        <StyledButton onClick={this.handleNew}>NEW</StyledButton>
        <StyledIdeaContainer>{ideasList}</StyledIdeaContainer>
      </StyledContainer>
      
    )
  }
}

export default IdeaBoard;



















// // importing React, axios, and the StyledComponents.js
// import React, { Component } from 'react'
// import axios from 'axios'
// import styled from 'styled-components'

// //styles the wrapper containing everything
// const StyledPageWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `
// //Styles the menu
// const StyledIdeaMenu = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 10px;
//   align-items: center;
//   width: 70vw;
// `

// // Styles the new idea button
// const StyledNewIdea = styled.div`
//   background-color: red;
//   width: 80px;
//   display:flex;
//   align-items: center;
//   justify-content: center;
//   padding: 15px;
// `

// // const TempItem = styled.div`
// //   border: 1px solid black;
// // `

// // Styles the container the ideas are placed in
// const StyledIdeaContainer = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   width: 70vw;
//   padding: 20px;
//   flex-wrap: wrap;
// `
// // styling the current idea
// const StyledIdea = styled.div`
//   background-color: rgb(255, 255, 136);
//   width: 150px;
//   /* height: 100px; */
//   padding: 15px;
//   padding-top: 0px;
//   margin: 20px;
// `

// // Always include await with your async
// // & ,ake sure to install axios in the client foldern not the main folder

// export default class Idea extends Component {
//   state = {
//     user: {},
//     ideas: []
//   }

//   getUser = async () => {
//     const userId = this.props.match.params.userId
//     const response = await axios.get(`/api/users/${userId}`)
//     this.setState({
//       user: response.data,
//       // reverses the order in which you see the ideas
//       ideas: response.data.ideas.reverse()
//     })
//   }

//   componentDidMount = () => {
//     this.getUser()
//   }

//   // handles the new idea function
//   handleNew = async () => {
//     const userId = this.props.match.params.userId
//     await axios.post(`/api/users/${userId}/ideas`)
//     await this.getUser()
//   }

//   // handles the delete function
//   handleDelete = async (ideaId) => {
//     const userId = this.props.match.params.userId
//     await axios.delete(`/api/users/${userId}/ideas/${ideaId}`)
//     await this.getUser()
//   }

//   componentDidMount = () => {
//     this.getUser()
//   }

// // handles the function when you want to change an idea
//   handleChange = (event, i) => {
//     //take it out
//     const ideas = [...this.state.ideas]
//     //change it
//     ideas[i][event.target.name] = event.target.value
//     //put it back
//     this.setState({ ideas })
//   }

// // handles the updated idea function within the api
//   updateIdea = async (i) => {
//     const userId = this.props.match.params.userId
//     const updatedIdea = this.state.ideas[i]
//     await axios.put(`/api/users/${userId}/ideas/${updatedIdea._id}`, updatedIdea)
//   }

//   // when you click on a (x) button, an idea is deleted
//   // when you click inside of a text field you have the ability to modify an idea title
//   // when you click inside of a text field you have the ability to modify an idea description
//   render() {
//     const ideasList = this.state.ideas.map((idea, i) => {
//       return (<StyledIdea key={i}>
//           <div onClick={() => this.handleDelete(idea._id)}> x </div>

//           {/* <input type='text' name='title' value={idea.title}
//             onChange={(event) => this.handleChange(event, i)}
//             onBlur={() => this.updateIdea(i)} /> */}

//           <input type='text' name='description' value={idea.description}
//             onChange={(event) => this.handleChange(event, i)}
//             onBlur={() => this.updateIdea(i)} />
//         </StyledIdea>
//       )
//     })

//     // styles the menu, idea, things to sort, & things to use sub headings and place them in the wrapper
//     // Gives you a new sticky note when you click the new idea button
//     return (
//       <StyledPageWrapper>
//         <h1>Idea Board for {this.state.user.userName}</h1>
//         <StyledIdeaMenu>
//           <StyledNewIdea onClick={this.handleNew}>+</StyledNewIdea>
//           {/* <TempItem>Thing to Sort</TempItem>
//           <TempItem>Thing to Use Sometimes</TempItem> */}
//         </StyledIdeaMenu>
//         <StyledIdeaContainer>
//           {ideasList}
//         </StyledIdeaContainer>
//       </StyledPageWrapper>
//     )
//   }
// }

