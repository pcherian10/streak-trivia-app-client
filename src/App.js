import React, { Component } from 'react';
import Login from './Login'
import  Dashboard  from './containers/Dashboard'
import PlayGame from './components/PlayGame'
import QuestionsContainer from './containers/QuestionsContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';


export default class App extends Component {

  render () {
    return (
      <div className="App">
        <BrowserRouter>
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
       </BrowserRouter>
      </div>
    )
  }

}
