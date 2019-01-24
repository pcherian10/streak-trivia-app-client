export default function questionsReducer ( state = {
   user:{},
   questions: []
 }, action) {

 switch (action.type) {

   case 'LOAD_USER_QUESTIONS':
    return {...state, questions: action.questions};

   case 'LOAD_GAME_QUESTIONS':
    return {...state, questions: action.questions};  //need to filter out questions where user_id is not equal to id.

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

   case 'LOGIN':
    return {...state, user: action.user};

   case 'LOGOUT':
    return {user: {id:"start"}, questions: ["start"]};

   default:
    return state;
 }

}
