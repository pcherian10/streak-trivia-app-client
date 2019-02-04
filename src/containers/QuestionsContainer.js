import React, { Component } from 'react';
import QuestionForm from '../components/questions/QuestionForm'
import Questions from '../components/questions/Questions'
import { connect } from 'react-redux'
import { loadUserQuestions } from '../actions/index'

class QuestionsContainer extends Component {


  componentWillMount() {
    this.props.loadUserQuestions()
  }

  componentWillUpdate() {
    this.props.loadUserQuestions()
  }

  render() {
    return (
      <div>
        <QuestionForm />
        <Questions />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadUserQuestions: () => dispatch(loadUserQuestions())
  }
}


export default connect(null, mapDispatchToProps)(QuestionsContainer)
