import React from 'react';
import QuestionCard from './QuestionCard'

const Questions = ({questions}) => {
      
      const displayQuestions = questions.map((q,i) => <QuestionCard question = {q} key = {q.id} />)

      return (  
        <div>
          {displayQuestions}
        </div>
      );
    
}

export default (Questions)
