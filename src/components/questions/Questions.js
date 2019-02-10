import React, { Component } from 'react';
import QuestionCard from './QuestionCard'
import { loadUserQuestions } from '../../actions/index'
import { connect } from 'react-redux'

const Questions = ({questions}) => {

   const selectedQuestions = questions.map( (q, i) => <QuestionCard question={q} key={q.id} /> )

    return (
      <div>
        {selectedQuestions}
      </div>
    );

}

export default (Questions)
