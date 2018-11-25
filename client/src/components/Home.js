// THE HOME PAGE
// Importing react
// importing the Link tag
// importing styled-components

import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

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
        <Styledh1>W E L C O M E</Styledh1>
        <Link to='/login'><Styledh2>Log In</Styledh2></Link>
      </div>
    )
  }
}
