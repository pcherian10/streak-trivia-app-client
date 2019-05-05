import React, { Component } from 'react';
import QuestionForm from '../components/questions/QuestionForm'
import Questions from '../components/questions/Questions'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'


class QuestionsContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      sorted: false
    }
  }

  handleSortClick = e => {
    e.preventDefault();
    this.setState({
      sorted: true
    })
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    let sortedQuestions = null
    const selectedQuestions = this.props.questions
    if (this.state.sorted === true) {
       sortedQuestions = [...this.props.questions].sort((a,b) => {
          if (a.votes > b.votes) {
            return -1;
          }
          if (a.votes < b.votes) {
            return 1;
          }
          return 0;
        })
    }
    debugger;
    return (
      <div>
        <QuestionForm />
        <Button type="button" onClick={this.handleSortClick}>Sort</Button>
        {this.state.sorted === true ? (<Questions questions={sortedQuestions} />):(<Questions questions={selectedQuestions} />)}        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {questions: state.questions.selectedQuestions}
}

export default connect(mapStateToProps)(QuestionsContainer)
