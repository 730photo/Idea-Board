// THE HOME PAGE
// Importing react
// importing the Link tag
// importing styled-components

import React, { Component } from 'react'
import { StyledLink } from './SharedComponents'
import styled from 'styled-components'


// const StyledButton = styled.button`
//     /* width: 50px; */
//     border-radius: 3px;
//     margin: auto;
// `

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Acme', sans-serif;
`
// const StyledLink = styled.div`
//   border-radius: 3px;
//   margin: auto;
// `


const Styledh1 = styled.div`
  text-align: center;
  /* text-align: center; */
  /* margin-top: 50px; */
  font-size: 5vw;
  padding-top: 20%;
`
const Styledh2 = styled.div`
  text-align: center;
  /* text-align: center; */
  /* margin-top: 50px; */
  font-size: 3vw;
  /* padding-top: 20%; */
`


export default class Home extends Component {
  render() {
    return (
      <div>
        <StyledContainer>
        <Styledh1>WELCOME</Styledh1>
        <StyledLink to='/login'><Styledh2>Log In</Styledh2></StyledLink>
        </StyledContainer>
      </div>
    )
  }
}
