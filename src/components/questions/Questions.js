import React, { Component } from 'react';
import QuestionCard from './QuestionCard'
import { loadQuestions, loadGameQuestions } from '../../actions/index.js'
import { connect } from 'react-redux'


class Questions extends Component {


  render() {
    const questions = this.props.questions.map( (q, i) => <QuestionCard question={q} key={q.id} /> )

    return (
      <div>
        {questions}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { questions: state.questions.questions }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadQuestions: () => dispatch(loadQuestions()),
    loadGameQuestions: () => dispatch(loadGameQuestions()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
