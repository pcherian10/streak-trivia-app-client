import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Form, Button, Radio, Header } from 'semantic-ui-react'
import { updateUserStreakandQuestionId, updateUserQuestionId} from '../actions/index'
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
      index: 0
    }
  }


  onRadioChange = (e , {value}) => this.setState(
    {userAnswer: value}
  );

  handleSubmitClick = () => {

    if (this.state.userAnswer === this.state.currentQuestion.correct_answer) {
      this.props.updateUserStreakandQuestionId(this.state.currentQuestion.id);
      console.log(this.props.user)
      api.user.updateUser(this.props.user)
      let updatedIndex = this.state.index += 1;
      this.setState = {
        currentQuestion: this.props.questions[updatedIndex],
        userAnswer: "",
        index: updatedIndex
      }
    }
    else {
      this.props.updateUserQuestionId(this.state.currentQuestion.id)
      api.user.updateUser(this.props.user)
      console.log("Your streak has ended, thanks for playing!")
      this.props.history.push('/dashboard')
    }

  }



  render () {
    return (
      <Grid centered style={styles.root}>
        <Grid.Column width={10}>
          <Header as='h1'>Streak Trivia</Header>

            <div className="question">
                <Form.Field>
                  <Header as='h3'>{this.state.currentQuestion.text}</Header>
                  <p>by {this.state.currentQuestion.user.username}</p>
                  <br></br>
                  <label style={{'color' : 'green'}}>Current Streak: {this.props.user.streak}</label>
                </Form.Field>

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

            <Button onClick={() => this.handleSubmitClick()} >Submit</Button>
          </div>

        </Grid.Column>
      </Grid>

    )

  }

}

const mapStateToProps = state => {
  return {
          questions: state.questions.questions,
          user: state.questions.user
        }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserStreakandQuestionId: (questionId) => dispatch(updateUserStreakandQuestionId(questionId)),
    updateUserQuestionId: (questionId) => dispatch(updateUserQuestionId(questionId)),

  }
}



//componentWillMount() {}

//componentDidMount() {}

//componentWillReceiveProps(nextProps) {}
// or
//shouldComponentUpdate(nextProps, nextState)

//componentWillUpdate(nextProps, nextState) {}

//componentDidUpdate(prevProps, prevState) {}


export default connect(mapStateToProps, mapDispatchToProps)(PlayGame)
