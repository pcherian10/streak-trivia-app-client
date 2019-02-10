import React from 'react';
import QuestionCard from './QuestionCard'


const Questions = ({questions}) => {

   const selectedQuestions = questions.map( (q, i) => <QuestionCard question={q} key={q.id} /> )

    return (
      <div>
        {selectedQuestions}
      </div>
    );

}

export default (Questions)
