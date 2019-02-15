
const API_ROOT = `http://localhost:3001/api/v1`;

const token = localStorage.getItem('token');

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: token
};

const updateUser = (user) => {
  fetch(`${API_ROOT}/users/${user.id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(user)
  }).then(res => {
    return dispatch => {
      dispatch({type: "UPDATE_USER", user: res})
      dispatch({type: "USERS_RANKED_BY_STREAK", user: res})
    }
  })
}

const updateQuestion = (question) => {
  fetch(`${API_ROOT}/users/${question.user_id}/questions/${question.id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(question)
  })
}

const getCurrentUser = (username, password) => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers,
  }).then(res => res.json());
};


export default {
  auth: {
    getCurrentUser
  },
  user: {
    updateUser
  },
  question: {
    updateQuestion
  }
};
