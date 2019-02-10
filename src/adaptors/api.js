
const API_ROOT = `http://localhost:3001/api/v1`;

const token = localStorage.getItem('token');

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: token
};


const updateUser = (user) => {
  return dispatch => {
    fetch(`${API_ROOT}/users/${user.id}`, {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify(user)
  }).then(res => {
    dispatch({type: "UPDATE_USER", user: res})
  })
  }
};

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
  }
};
