import URL_ROOT from '../URL'

export function login (user) {
  return dispatch => {
    dispatch({type: "LOGIN", user: user})
  }
}

export function loadGameQuestions () {
  return dispatch => {
    fetch(`${URL_ROOT}questions`)
    .then(res => res.json())
    .then( res => {
      dispatch({ type: 'LOAD_GAME_QUESTIONS', questions: res})
    })
  }
}

export function loadQuestions () {
  return dispatch => {
    fetch(`${URL_ROOT}questions`)
    .then(res => res.json())
    .then( res => {
      dispatch({ type: 'LOAD_QUESTIONS', questions: res})
    })
  }
}
