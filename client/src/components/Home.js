import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledHome = styled.div`
    text-align: center;
    background-size: cover;
    color: #4FB99F;
    -webkit-text-stroke: 1px #112F41;
    padding: 20px 10px;
    height: 60vh;
`
const Styled = styled.body`
    font-family: 'Acme', sans-serif;
`
const StyledH1 = styled.h1`
    text-align: center;
    margin-top: 150px;
    font-size: 10vw;
    /* -webkit-text-stroke: 1px #112F41; */
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  color: #4FB99F;
  padding-bottom: 100px;
  /* -webkit-text-stroke: 1px #112F41; */
`
const StyledLink = styled.div`
  padding-top: 20px;
  text-align: center;
  background-color: #4FB99F;
  text-decoration: none;
  border-top: solid 20px #4FB99F;
`

const StyledH3 = styled.h1`
  color: #4FB99F;
  font-size: 3vw;
  -webkit-text-stroke: 1px #112F41;
  
`
const Styledli = styled.div`
  text-align: center;
  font-size: 2vw;
  -webkit-text-stroke: 1px #112F41;
`

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #4FB99F;
  height: 30px;
  padding: 1%;
  color: white;
  font-size: 1vw;
  -webkit-text-stroke: 1px #112F41;
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
          <Styledli>1. Get Organized</Styledli>
          <Styledli>2. Be Creative</Styledli>
          <Styledli>3. Have Fun</Styledli>
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