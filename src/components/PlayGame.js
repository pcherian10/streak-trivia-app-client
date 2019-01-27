import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Form, Button, Radio, Header } from 'semantic-ui-react'
import { loadGameQuestions } from '../actions/index'

const styles = {
  root: {
    marginTop: "5%"
  }
}

class PlayGame extends Component {

  constructor (props) {
    super(props)
    let index = 0;

    this.state = {
      currentQuestions: this.props.questions,
      userAnswer: "",
      index: 0
    }
  }


  onRadioChange = (e , {value}) => this.setState(
    {user_answer: value}
  );


  render () {

    return (
      <Grid centered style={styles.root}>

        <Grid.Column width={10}>

          <Header as='h1'>Streak Trivia</Header>

          <Form>
              <Form.Field>
                <label>Question</label>
                  <input
                    type="text"
                    name = "text"
                    value = {this.state.currentQuestions[this.state.index].text}
                    onChange = {this.handleOnChange} />
              </Form.Field>

                <Form.Field>
                  <Radio
                    label={this.state.currentQuestions[this.state.index].first_choice}
                    name="first_choice"
                    value={this.state.currentQuestions[this.state.index].first_choice}
                    checked={this.state.user_answer === this.state.currentQuestions[this.state.index].first_choice}
                    onChange={this.onRadioChange}
                  />
                </Form.Field>

                <Form.Field>
                  <Radio
                    label={this.state.currentQuestions[this.state.index].second_choice}
                    name="first_choice"
                    value={this.state.currentQuestions[this.state.index].second_choice}
                    checked={this.state.user_answer === this.state.currentQuestions[this.state.index].second_choice}
                    onChange={this.onRadioChange}
                  />
                </Form.Field>

                <Form.Field>
                  <Radio
                    label={this.state.currentQuestions[this.state.index].third_choice}
                    name="first_choice"
                    value={this.state.currentQuestions[this.state.index].third_choice}
                    checked={this.state.user_answer === this.state.currentQuestions[this.state.index].third_choice}
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

const mapDispatchToProps = (dispatch) => {
  return {
    loadGameQuestions: () => dispatch(loadGameQuestions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayGame)
