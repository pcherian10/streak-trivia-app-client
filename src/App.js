import React, { Component } from 'react';
import Login from './Login'
import { logout, loadQuestions, rankedUsers } from './actions/index'
import RankingsContainer from './containers/RankingsContainer'
import PlayGame from './components/PlayGame'
import QuestionsContainer from './containers/QuestionsContainer'
import { BrowserRouter, Route, Switch, withRouter, NavLink} from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux'
import Navbar from './Navbar'



class App extends Component {

  componentWillMount() {
    this.props.loadQuestions()
    this.props.rankedUsers();
  }

  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
          <Navbar currentUser={this.props.user} history={this.props.history}/>
          <Switch>
            <Route exact path="/" component={RankingsContainer}/>
            <Route path="/login" component={Login}/>
            <Route path="/game" component={PlayGame}/>
            <Route path="/questions" component={QuestionsContainer}/>
            <Route path="/logout"/>
          </Switch>
        </div>
       </BrowserRouter>
    </div>
    )
  }

}

const mapStateToProps =  (state) => {
  return {user: state.questions.user}
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    loadQuestions: () => dispatch(loadQuestions()),
    rankedUsers: () => dispatch(rankedUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
