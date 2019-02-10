import React, { Component } from 'react';
import MessageViewer from './MessageViewer'
import { connect } from 'react-redux';
import { Grid, Form, Button, Radio, Header, Transition } from 'semantic-ui-react'
import { updateUserStreak, updateHighestStreak, updateUserQuestionId, resetUserStreak} from '../actions/index'
import api from '../adaptors/api'

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
      index: 0,
      message: ""
    }

  }

  componentWillUnmount () {
    api.user.updateUser(this.props.user)
  }

  onRadioChange = (e , {value}) => this.setState({
    userAnswer: value
  });

  handleSubmitClick = () => {
    this.props.updateUserQuestionId(this.state.currentQuestion.id);

    if (this.state.userAnswer === this.state.currentQuestion.correct_answer
      && this.state.index <= (this.props.questions.length - 1) ) {
        this.props.updateUserStreak()
        this.props.updateHighestStreak(this.props.user)
        api.user.updateUser(this.props.user)
        let updatedIndex = this.state.index += 1;
        this.setState({
          currentQuestion: this.props.questions[updatedIndex],
          userAnswer: "",
          index: updatedIndex,
          message: "Correct! On to the next!"
        })
      }

    else {
      if(this.state.message !== "Correct! On to the next!" || this.state.message !== "") {
          this.setState({message: `Incorrect! Correct answer was ${this.state.currentQuestion.correct_answer}.`})
        }
      this.props.resetUserStreak();
      api.user.updateUser(this.props.user)
    }

  }

  handleNewGameClick = () => {
    let updatedIndex = this.state.index += 1;
    this.setState({
      currentQuestion: this.props.questions[updatedIndex],
      userAnswer: "",
      index: updatedIndex,
      message: ""
    })
  }


  render () {
      return (
        <div>
          <Grid centered style={styles.root}>
            <Grid.Column width={10}>
              <Header as='h1'>Streak Trivia</Header>
                {this.state.message !== "" ? (<MessageViewer message={this.state.message}/>) : (null)}
                <div className="question">
                    <br></br>
                    <Form.Field>
                      <Header as='h3'>{this.state.currentQuestion.text}</Header>
                      <p>by {this.state.currentQuestion.user.username}</p>
                      <br></br>

                      <label style={{'color' : 'green'}}>Current Streak: {this.props.user.streak}</label>
                    </Form.Field>
                    <br></br>

                    <Form.Field>
                      <Radio
                        label={this.state.currentQuestion.first_choice}
                        name="first_choice"
                        value={this.state.currentQuestion.first_choice}
                        checked={this.state.userAnswer === this.state.currentQuestion.first_choice}
                        onChange={this.onRadioChange}
                      />
                    </Form.Field>
                    <br></br>

                    <Form.Field>
                      <Radio
                        label={this.state.currentQuestion.second_choice}
                        name="second_choice"
                        value={this.state.currentQuestion.second_choice}
                        checked={this.state.userAnswer === this.state.currentQuestion.second_choice}
                        onChange={this.onRadioChange}
                      />
                    </Form.Field>
                    <br></br>

                    <Form.Field>
                      <Radio
                        label={this.state.currentQuestion.third_choice}
                        name="third_choice"
                        value={this.state.currentQuestion.third_choice}
                        checked={this.state.userAnswer === this.state.currentQuestion.third_choice}
                        onChange={this.onRadioChange}
                      />
                    </Form.Field>
                    <br></br>
                {this.state.message !== "" && this.state.message !== "Correct! On to the next!"  ?
                  (<Button onClick={this.handleNewGameClick}>Click to Restart!</Button>) :
                  (<Button onClick={this.handleSubmitClick}>Submit</Button>)}
              </div>
            </Grid.Column>
          </Grid>
        </div>
        )

    }

}


const mapStateToProps = state => {
  return {
          questions: state.questions.selectedQuestions,
          user: state.questions.user
        }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserStreak: () => dispatch(updateUserStreak()),
    updateHighestStreak: (user) => dispatch(updateHighestStreak(user)),
    updateUserQuestionId: (questionId) => dispatch(updateUserQuestionId(questionId)),
    resetUserStreak: () => dispatch(resetUserStreak())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlayGame)
