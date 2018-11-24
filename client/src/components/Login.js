// importing React, axios, and SharedComponents for style
import React, { Component } from 'react'
import axios from 'axios'
import { StyledLink } from './SharedComponents'

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: rgb(10,10,10);
// `

export default class Login extends Component {
  state = {
    users: [],
    newUser: {
      userName: ''
    }
  }

  // componentDidMount always goes outside of the render
  // to avoid infinite loop 
  componentDidMount = async () => {
    const response = await axios.get('/api/users')
    this.setState({ users: response.data })
  }

// handles the change function
  handleChange = (event) => {
    // this is the take it out, change it, put it back 
    const newUser = { ...this.state.newUser }
    newUser[event.target.name] = event.target.value
    this.setState({ newUser })
  }

  // handle the submit function
  //posting to API from state
  handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post('/api/users', this.state.newUser)

    const users = [...this.state.users]
    users.push(response.data)
    this.setState({ users })
  }

  // handles the delete function
  // handleDelete = async (userId) => {
  //   const userId = this.props.match.params.userId
  //   await axios.delete(`/api/users/${userId}`)
  //   await this.getUser()
  // }
  
  // turns the userName into a link and tells it where to go once you click on it
  render() {
    const usersList = this.state.users.map((user, i) => {
      return (<div key={i}>
      <StyledLink to={`/users/${user._id}`} key={i}>Name: {user.userName}</StyledLink>
      </div>)
    })

    // style the Login page
    // what you need to have when you come to the Login page
    // has the Create New User button
    return (
      <div>
        <h1>Login Page</h1>
        {usersList}
        {/* handleSubmit goes in the form tag not submit input */}
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='userName'
            value={this.state.newUser.userName}
            onChange={this.handleChange} />
          <input type='submit' value='Create New User' />
        </form>
      </div>
    )
  }
}
