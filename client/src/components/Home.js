// THE HOME PAGE
// Importing react
// importing the Link tag
// importing styled-components

import React, { Component } from 'react'
import { StyledLink } from './SharedComponents'
import styled from 'styled-components'


const StyledButton = styled.button`
    border-radius: 3px;
    margin: auto;
`

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Acme', sans-serif;
`


const Styledh1 = styled.div`
  text-align: center;
  font-size: 5vw;
  padding-top: 20%;
`
const Styledh2 = styled.div`
  text-align: center;
  font-size: 3vw;
`

const StyledLists = styled.div`
  font-family: 'Acme', sans-serif;
  text-align: center;
`


export default class Home extends Component {
  render() {
    return (
      <div>
        <StyledLists>
        <StyledContainer>
        <Styledh1>WELCOME</Styledh1>
        <StyledButton>
        <StyledLink to='/login'><Styledh2>Log In</Styledh2></StyledLink>
        </StyledButton>
        </StyledContainer>
        </StyledLists>
      </div>
    )
  }
}
