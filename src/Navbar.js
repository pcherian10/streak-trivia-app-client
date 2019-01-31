import React, {Component} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import {loadGameQuestions, loadUserQuestions, logout} from './actions/index'
import { connect } from 'react-redux'




class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {
    const loggedIn = !!this.props.currentUser.id
    return (
    <nav>
    <Menu>
      <Menu.Item header name="Streak Trivia!"/>
      <Menu.Item name="About" />
      <Menu.Item
        name="Play Game"
        onClick={() => this.props.loadGameQuestions()}
        as = {Link}
        to = "/game"/>
      <Menu.Item
        name="Submit a Question"
        onClick={() => this.props.loadUserQuestions()}
        as = {Link}
        to = "/questions"/>
    {loggedIn ? (
      <Menu.Menu position="right">
        <Menu.Item
          name="Logout"
          onClick={() => this.props.logout()}
          as = {Link}
          to = "/logout"/>
      </Menu.Menu>
      ) : (
      <Menu.Menu position='right'>
        <Menu.Item name="Sign Up" />
        <Menu.Item
           name = "Login"
           onClick={() => this.props.history.push('/login')}
           as = {Link}
           to = "/login" />
      </Menu.Menu>
    )}
    </Menu>
    </nav>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserQuestions: () => dispatch(loadUserQuestions()),
    loadGameQuestions: () => dispatch(loadGameQuestions()),
    logout: () => dispatch(logout())
  }
}



export default connect (null, mapDispatchToProps)(Navbar);
//onClick={() => this.props.history.push('/login')}
