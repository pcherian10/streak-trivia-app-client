import React, { Component } from 'react';
import QuestionForm from '../components/questions/QuestionForm'
import Questions from '../components/questions/Questions'
import { connect } from 'react-redux'

class QuestionsContainer extends Component {

  render() {
    return (
      <div>
      </div>
    );
  }
}


export default connect()(QuestionsContainer)

// Implement these next:
//<Questions />
//<QuestionForm />
