export default function questionsReducer ( state = {
   user:{},
   questions: []
 }, action) {

   console.log(action)
 switch (action.type) {

   case 'LOAD_QUESTIONS':
    return {...state, questions: action.questions};

   case 'LOAD_USER_QUESTIONS':
    let updatedUserQuestions = state.questions.filter (q => state.user.id === q.user.id)
    return {...state, questions: updatedUserQuestions};

   case 'LOAD_GAME_QUESTIONS':
    let updatedGameQuestions = state.questions.filter (q => state.user.id !== q.user.id)
    return {...state, questions: updatedGameQuestions};

   case 'ADD_QUESTION':
    return {...state, questions: [...state.questions, action.question]};

   case 'UPDATE_QUESTION':
     let updatedQuestions = state.questions.map( q => {
        if (q.id === action.question.id) {
          return action.question;
        }
        else {
          return q;
        }
      })
      return {...state, questions: updatedQuestions}

   case 'UPDATE_USER_STREAK':
      return {...state, user: [...state.user.streak + 1]}

   case 'UPDATE_USER_LAST_QUESTION_ANSWERED_ID':
      return {...state, user: [...state.user.lastQuestionAnsweredId + 1]}

   case 'LOGIN':
    return {...state, user: action.user};

   case 'LOGOUT':
    return {user: {id:"start"}, questions: ["start"]};

   default:
    return state;
 }

}
