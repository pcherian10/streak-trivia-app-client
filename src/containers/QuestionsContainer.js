import React, { Component } from 'react';
import QuestionForm from '../components/questions/QuestionForm'
import Questions from '../components/questions/Questions'
import { connect } from 'react-redux'

class QuestionsContainer extends Component {

  render() {
    return (
      <div>
        <QuestionForm />
        <Questions questions={this.props.questions} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {questions: state.questions.selectedQuestions}
}

export default connect(mapStateToProps)(QuestionsContainer)
