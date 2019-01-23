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


//<QuestionForm/>
//<Questions />
// const mapStateToProps = state => ({ questions: state.questions })
//
// const mapDispatchToProps = dispatch => ({
//   addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', text}),
//   deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
// })
