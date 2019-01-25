import React, { Component } from 'react';
import QuestionForm from '../components/questions/QuestionForm'
import Questions from '../components/questions/Questions'
import { connect } from 'react-redux'

class QuestionsContainer extends Component {

  render() {
    return (
      <div>
        <QuestionForm />
        <Questions />
      </div>
    );
  }
}


export default connect()(QuestionsContainer)
