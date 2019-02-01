import React, { Component } from 'react';
import QuestionCard from './QuestionCard'
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
  return { questions: state.questions.selectedQuestions }
}


export default connect(mapStateToProps)(Questions)
