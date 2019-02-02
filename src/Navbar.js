import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { logout, loadGameQuestions, loadUserQuestions, login } from './actions/index'
import { connect } from 'react-redux'
import  api  from './adaptors/api'

class Navbar extends React.Component {

  render () {
    const loggedIn = !!this.props.currentUser.id
    return (
    <nav>
    <Menu>
      <Menu.Item header name="Streak Trivia!"/>
      <Menu.Item
        name="About"
        as = {Link}
        to = "/" />
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
          <Menu.Item>
            Welcome, {this.props.currentUser.first_name}!
          </Menu.Item>
          <Menu.Item
            name="Logout"
            onClick={() => this.props.logout()}
            as = {Link}
            to = "/logout"/>
        </Menu.Menu>
      ) : (
      <Menu.Menu position='right'>
        <Menu.Item
          name="Sign Up"
          onClick={() => this.props.history.push('/signup')}
          as = {Link}
          to = "/signup"/>
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
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    loadGameQuestions: () => dispatch(loadGameQuestions()),
    loadUserQuestions: () => dispatch(loadUserQuestions())
  }
}



export default connect (null, mapDispatchToProps)(Navbar);
