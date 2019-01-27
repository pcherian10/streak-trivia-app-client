import React, { Component } from 'react';
import QuestionsContainer from './QuestionsContainer'
import PlayGame from '../components/PlayGame'
import { Grid, Form, Button, Radio, Header } from 'semantic-ui-react'
//import RankingsContainer from './RankingsContainer'
import { connect } from 'react-redux'
import { loadGameQuestions, loadUserQuestions} from '../actions/index'

class Dashboard extends Component {

  handleGameClick = () => {
    this.props.loadGameQuestions()
    this.props.history.push('/game')
  }

  handleUserQuestionsClick = () => {
    this.props.loadUserQuestions()
    this.props.history.push('/questions')
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleGameClick}>Play Game!</Button>
        <Button onClick={this.handleUserQuestionsClick}>Submit Your Own Question!</Button>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    loadGameQuestions: () => dispatch(loadGameQuestions()),
    loadUserQuestions: () => dispatch(loadUserQuestions())
  }
}

export default connect(null, mapDispatchToProps)(Dashboard);
