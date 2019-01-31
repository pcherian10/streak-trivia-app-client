import URL_ROOT from '../URL'

export function login (user) {
  return dispatch => {
    dispatch({type: "LOGIN", user: user})
  }
}

export function logout () {
  return dispatch => {
    dispatch({type: "LOGOUT"})
  }
}

export function loadGameQuestions () {
  return dispatch => {
      dispatch({ type: 'LOAD_GAME_QUESTIONS'})
    }
}

export function loadUserQuestions () {
  return dispatch => {
      dispatch({ type: 'LOAD_USER_QUESTIONS'})
    }
}

export function updateUserStreakandQuestionId (questionId) {
  return dispatch => {
      dispatch({ type: 'UPDATE_USER_STREAK_AND_QUESTION_ID', payload: questionId})
  }
}

export function updateUserQuestionId (questionId) {
  return dispatch => {
      dispatch({ type: 'UPDATE_USER_QUESTION_ID', payload: questionId})
  }
}

export function resetUserStreak () {
  return dispatch => {
      dispatch({ type: 'RESET_USER_STREAK', payload: 0})
  }
}

export function loadQuestions () {
  return dispatch => {
    fetch(`${URL_ROOT}questions`)
    .then(res => res.json())
    .then( res => {
      dispatch({ type: 'LOAD_QUESTIONS', questions: res })
    })
  }
}

export function rankedUsers () {
  return dispatch => {
    fetch(`${URL_ROOT}ranked_users`)
    .then(res => res.json())
    .then( res => {
      dispatch({ type: 'USERS_RANKED_BY_STREAK', payload: res })
    })
  }
}
