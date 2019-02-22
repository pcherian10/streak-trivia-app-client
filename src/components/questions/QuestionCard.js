import React, {Component} from 'react';
import { Card, Header, Button} from 'semantic-ui-react'
import api from '../../adaptors/api'


class QuestionCard extends Component {


  constructor(props) {
    super(props)

    this.state = {
      question : {
        id: this.props.question.id,
        text: this.props.question.text,
        first_choice: this.props.question.first_choice,
        second_choice: this.props.question.second_choice,
        third_choice: this.props.question.third_choice,
        correct_answer: this.props.question.correct_answer,
        votes: this.props.question.votes,
        user_id: this.props.question.user.id
      }
    }

  }

  handleVoteClick = e => {
    e.preventDefault()
    const newQuestion = { ...this.state.question, votes: this.state.question.votes + 1 };
    api.question.updateQuestion(newQuestion)
    this.setState({
      question: newQuestion
    })
  }

  render () {
    const { question } = this.state;
    return(
      <div className="ui center aligned one column grid">
        <Card.Group style={{'maxWidth':'200px'}} className="ui center aligned one column grid">
          <Header as="h3">{question.text}</Header>
          <Card fluid color='green' header={question.first_choice} />
          <Card fluid color='green' header={question.second_choice} />
          <Card fluid color='green' header={question.third_choice} />
          <Button name="votes" type="button" onClick={this.handleVoteClick}>{question.votes}</Button>
        </Card.Group>
      </div>
    )
  }
}

export default (QuestionCard)
