import React, {Component} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    const loggedIn = !!this.props.currentUser.id
    return (
    <div>
    <Menu>
      <Menu.Menu>
        <Menu.Item header>Streak Trivia!</Menu.Item>
        <Menu.Item
          as={Link}
          exact
          activeClassName="active"
          to="/dashboard"
          name="Dashboard"/>
        <Menu.Item
          as={Link}
          activeClassName="active"
          to="/game"
          name="Play Game!"/>
        <Menu.Item
          as={Link}
          activeClassName="active"
          to="/questions"
          name="Submit a Question"/>

        { loggedIn ? (
          <Menu.Menu>
            <Menu.Item
              position = "right"
              as={Link}
              activeClassName="active"
              to="/signout"
              icon="Log out"
              name="Log Out" />
            </Menu.Menu>
              ) : (
          <Menu.Menu position="right">
            <Menu.Item
              as={Link}
              activeClassName="active"
              to="/register"
              icon="signup"
              name="Register" />
            <Menu.Item
              as={Link}
              activeClassName="active"
              to="/signin"
              icon="sign in"
              name="Login" />
          </Menu.Menu>)
        }

      </Menu.Menu>
    </Menu>

    { loggedIn ? (
      <div className="item">
        <br></br>
        {`Welcome, ${this.props.currentUser.first_name}!`}
        <br></br>
      </div>
      ) : (
        null
      )
    }
    </div>
    )



  }

}

export default Navbar;
