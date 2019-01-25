import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import api from '../../adaptors/api'
import '../../App.css';


class QuestionsForm extends Component {

  state = {
    text: "",
    first_choice: "",
    second_choice: "",
    third_choice: "",
    correct_answer: ""
  }

  handleSubmit = e => {
    e.preventDefault();
    api.questions
    .addQuestion(this.props.user, this.state)
      .then(res => {
          {console.log("Question added.")}
        }
    );
  };


  onRadioChange = value => {
    this.setState({
      correct_answer: value
    })
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>

            <div>

              <label> Question: </label>
                <textarea
                  name = "text"
                  value = {this.state.text}
                  onChange = {this.handleOnChange}
                />

              <label> First Choice: </label>
                <textarea
                  name = "first_choice"
                  value = {this.state.first_choice}
                  onChange = {this.handleOnChange}
                  />

              <label> Second Choice: </label>
                <textarea
                  name = "second_choice"
                  value = {this.state.second_choice}
                  onChange = {this.handleOnChange}
                  />

              <label> Third Choice: </label>
                <textarea
                  name = "third_choice"
                  value = {this.state.third_choice}
                  onChange = {this.handleOnChange}
                  />
          </div>


          <div>
            <p>Set Correct Answer: </p>
            <RadioGroup horizontal name="correct_answer" onChange={this.onRadioChange} value={this.state.correct_answer}>
              <RadioButton value="1">1</RadioButton>
              <RadioButton value="2">2</RadioButton>
              <RadioButton value="3">3</RadioButton>
            </RadioGroup>
          </div>

          <button type = "submit"> Add </button>

        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { user: state.questions.user}
}


export default connect(mapStateToProps)(QuestionsForm)
