import React, { Component } from 'react';
import Login from './Login'
import  Dashboard  from './containers/Dashboard'
import PlayGame from './components/PlayGame'
import QuestionsContainer from './containers/QuestionsContainer'
import { BrowserRouter, Route, Switch, withRouter, NavLink} from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux'
import Navbar from './Navbar'



class App extends Component {

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
          <Navbar currentUser={this.props.user}/>
          <Switch>
            <Route path="/dashboard" render={routerProps => {
                return (
                    <Dashboard history={routerProps.history} />
                    );
                  }
                }
              />
            <Route path="/game" render={routerProps => {
                return (
                    <PlayGame history={routerProps.history} />
                    );
                  }
                }
              />
            <Route path="/questions" render={routerProps => {
                  return (
                    <QuestionsContainer history={routerProps.history} />
                    );
                  }
                }
              />
            <Route path="/"
              render={routerProps => {
                return (
                  <Login history={routerProps.history} />
                );
              }
            }
            />
          </Switch>
          </div>
       </BrowserRouter>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {user: state.questions.user}
}

export default connect(mapStateToProps)(App)
