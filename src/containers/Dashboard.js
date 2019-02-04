import React, { Component } from 'react';
import QuestionsContainer from './QuestionsContainer'
import PlayGame from '../components/PlayGame'
import { Grid, Form, Button, Radio, Header } from 'semantic-ui-react'
import RankingsContainer from './RankingsContainer'
import { connect } from 'react-redux'
import { loadGameQuestions, loadUserQuestions, rankedUsers, loadQuestions} from '../actions/index'

class Dashboard extends Component {

  componentWillUpdate() {
    this.props.rankedUsers()
  }

  render() {
    return (
      <div>
        <RankingsContainer />
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    loadGameQuestions: () => dispatch(loadGameQuestions()),
    loadUserQuestions: () => dispatch(loadUserQuestions()),
    loadQuestions: () => dispatch(loadQuestions()),
    rankedUsers: () => dispatch(rankedUsers()),
  }
}

export default connect(null, mapDispatchToProps)(Dashboard);
