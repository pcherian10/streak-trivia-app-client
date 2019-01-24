import React, { Component } from 'react';
import Login from './Login'
import  Dashboard  from './containers/Dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';


export default class App extends Component {

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
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

//<QuestionsContainer />

//<RankingsContainer />
