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

   case 'UPDATE_USER_STREAK_AND_QUESTION_ID':
    return {...state, user: {...state.user, ...state.user.streak += 1, ...state.user.last_question_answered_id = action.payload}}

   case 'UPDATE_USER_QUESTION_ID':
    return {...state, user: {...state.user, ...state.user.last_question_answered_id = action.payload }}

   case 'LOGIN':
    return {...state, user: action.user};

   case 'LOGOUT':
    return {user: {id:"start"}, questions: ["start"]};

   default:
    return state;
 }

}
//
// function compare (a, b) {
//   if (a.id > b.id){
//     return 1;
//   } else if (a.id < b.id) {
//     return -1;
//   }
// }
