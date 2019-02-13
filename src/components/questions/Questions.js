import React from 'react';
import QuestionCard from './QuestionCard'

const Questions = ({questions}) => {

   const selectedQuestions = questions.map((q,i) => <QuestionCard key={i} question={q} />)

    return (
      <div>
        {selectedQuestions}
      </div>
    );


}

export default (Questions)
