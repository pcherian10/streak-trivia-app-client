import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuestion, loadUserQuestions } from '../../actions/index'
import { Grid, Form, Button, Radio, Header } from 'semantic-ui-react'

const styles = {
  root: {
    marginTop: "5%"
  }
}

class QuestionsForm extends Component {

  constructor() {
    super()

    this.state = {
      text: "",
      first_choice: "",
      second_choice: "",
      third_choice: "",
      correct_answer: ""
    }

  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addQuestion(this.props.user, this.state);
    this.props.loadUserQuestions()
  }

  onRadioChange = (e , {value}) => this.setState(
    {correct_answer: value}
  );

  handleOnChange = event => {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <Grid centered style={styles.root}>
        <Grid.Column width={10}>
          <Header as='h1'>Submit a Question!</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Question</label>
                <input
                  type="text"
                  name = "text"
                  value = {this.state.text}
                  onChange = {this.handleOnChange} />
            </Form.Field>

            <Form.Field>
              <label>First Choice:</label>
                <input
                  type="text"
                  name = "first_choice"
                  value = {this.state.first_choice}
                  onChange = {this.handleOnChange} />
            </Form.Field>

            <Form.Field>
              <label>Second Choice:</label>
                <input
                  type="text"
                  name = "second_choice"
                  value = {this.state.second_choice}
                  onChange = {this.handleOnChange} />
            </Form.Field>

            <Form.Field>
              <label>Third Choice:</label>
                <input
                  type="text"
                  name = "third_choice"
                  value = {this.state.third_choice}
                  onChange = {this.handleOnChange} />
            </Form.Field>


                <Form.Field>
                  <label> Set Answer: </label>
                  <Radio
                    label="1"
                    name="correct_answer"
                    value={this.state.first_choice}
                    checked={this.state.correct_answer === this.state.first_choice }
                    onChange={this.onRadioChange}
                  />
                </Form.Field>


                <Form.Field>
                  <Radio
                    label="2"
                    name="correct_answer"
                    value={this.state.second_choice}
                    checked={this.state.correct_answer === this.state.second_choice}
                    onChange={this.onRadioChange}
                  />
                </Form.Field>

                <Form.Field>
                  <Radio
                    label="3"
                    name="correct_answer"
                    value={this.state.third_choice}
                    checked={this.state.correct_answer === this.state.third_choice}
                    onChange={this.onRadioChange}
                  />
                </Form.Field>

            <Button type="submit">Submit</Button>
          </Form>
        </Grid.Column>
      </Grid>

    );
  }
}
const mapStateToProps = state => {
  return { user: state.questions.user}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: (user, state) => dispatch(addQuestion(user, state)),
    loadUserQuestions: () => dispatch(loadUserQuestions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsForm)
