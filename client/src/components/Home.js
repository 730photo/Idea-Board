import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledHome = styled.div`
    text-align: center;
    background-image: url('https://i.imgur.com/VAvfM8m.jpg');
    background-size: cover;
    color: blueviolet;
    -webkit-text-stroke: 1px #112F41;
    padding: 10px 10px;
    height: 80vh;
`
const Styled = styled.body`
    font-family: 'Acme', sans-serif;
`
const StyledH1 = styled.h1`
    text-align: center;
    margin-top: 150px;
    font-size: 10vw;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: blueviolet;
  color: white;
  padding-bottom: 100px;
`
const StyledLink = styled.div`
  padding-top: 20px;
  text-align: center;
  background-color: blueviolet;
  text-decoration: none;
  border-top: solid 20px #F2B134;
`

const StyledH3 = styled.h1`
  color: #4FB99F;
`
const Styledli = styled.div`
  text-align: center;
`

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #112F41;
  height: 30px;
  padding: 1%;
  color: white;
    a {
      text-decoration: none;
      color: white;
    }
`

class Home extends Component {
  render() {
    return (
      <Styled>
      <StyledHome>
        <StyledH1>idea board</StyledH1>
      </StyledHome>
      <StyledLink>
      <Link to='/login'><img src="https://i.imgur.com/cBSXIoX.png" alt="Click here"/></Link>
      </StyledLink>
      <StyledContainer>
      <div>
        <div>
        <StyledH3>Create Lists to:</StyledH3>
          <Styledli>-Get Organized</Styledli>
          <Styledli>-Be Creative</Styledli>
          <Styledli>-Have Fun</Styledli>
        </div>
        </div>
      </StyledContainer>
      <StyledFooter>
      <a href='https://www.linkedin.com/in/reginald-atl/' alt='linkedin'>Linkedin</a>
      </StyledFooter>
      </Styled>
    )
  }
}

export default Home;