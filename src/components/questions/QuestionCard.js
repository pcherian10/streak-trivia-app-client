import React, {Component} from 'react';
import { Card, Header, Button} from 'semantic-ui-react'


class QuestionCard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      vote: 0
    }
  }

  handleVoteClick = e => {
    e.preventDefault();
    this.setState({
      vote: this.state.vote + 1,
    })
  }

  render () {
    return(
      <div className="ui center aligned one column grid">
        <Card.Group style={{'maxWidth':'200px'}} className="ui center aligned one column grid">
          <Header as="h3">{this.props.question.text}</Header>
          <Card fluid color='green' header={this.props.question.first_choice} />
          <Card fluid color='green' header={this.props.question.second_choice} />
          <Card fluid color='green' header={this.props.question.third_choice} />
          <Button name="vote" type="button" onClick={this.handleVoteClick}>{this.state.vote}</Button>
        </Card.Group>
      </div>
    )
  }
}

export default (QuestionCard)
