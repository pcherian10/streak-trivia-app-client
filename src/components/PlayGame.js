import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Form, Button, Radio, Header } from 'semantic-ui-react'

const styles = {
  root: {
    marginTop: "5%"
  }
}

class PlayGame extends Component {

  constructor (props) {
    super(props)

    this.state = {
      currentQuestion: this.props.questions[0],
      userAnswer: "",
      index: 0
    }
  }

  onRadioChange = (e , {value}) => this.setState(
    {user_answer: value}
  );

  component


  render () {

    return (
      <Grid centered style={styles.root}>

        <Grid.Column width={10}>

          <Header as='h1'>Streak Trivia</Header>

          <Form onSubmit = {this.handleOnSubmit}>
              <Form.Field>
                <label>Question</label>
                  <input
                    type="text"
                    name = "text"
                    value = {this.state.currentQuestion.text}
                  />
              </Form.Field>

                <Form.Field>
                  <Radio
                    label={this.state.currentQuestion.first_choice}
                    name="first_choice"
                    value={this.state.currentQuestion.first_choice}
                    checked={this.state.user_answer === this.state.currentQuestion.first_choice}
                    onChange={this.onRadioChange}
                  />
                </Form.Field>

                <Form.Field>
                  <Radio
                    label={this.state.currentQuestion.second_choice}
                    name="second_choice"
                    value={this.state.currentQuestion.second_choice}
                    checked={this.state.user_answer === this.state.currentQuestion.second_choice}
                    onChange={this.onRadioChange}
                  />
                </Form.Field>

                <Form.Field>
                  <Radio
                    label={this.state.currentQuestion.third_choice}
                    name="third_choice"
                    value={this.state.currentQuestion.third_choice}
                    checked={this.state.user_answer === this.state.currentQuestion.third_choice}
                    onChange={this.onRadioChange}
                  />
                </Form.Field>

            <Button type="submit">Submit</Button>
          </Form>

        </Grid.Column>
      </Grid>

    )

  }

}

const mapStateToProps = state => {
  return {questions: state.questions.questions}
}


//componentWillMount() {}

//componentDidMount() {}

//componentWillReceiveProps(nextProps) {}
// or
//shouldComponentUpdate(nextProps, nextState)

//componentWillUpdate(nextProps, nextState) {}
//or
//componentDidUpdate(prevProps, prevState) {}


export default connect(mapStateToProps)(PlayGame)
