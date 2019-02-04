const API_ROOT = `http://localhost:3001/api/v1`;

const token = localStorage.getItem('token');

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: token
};

const addQuestion = (user, question) => {
  return fetch(`${API_ROOT}/users/${user.id}/questions`, {
    method: 'POST',
    headers: headers,
    data: {},
    dataType: "JSON",
    body: JSON.stringify({ question })
  }).then(res => res.json());

};

const addUser = (user) => {
  return fetch(`${API_ROOT}/users`, {
    method: 'POST',
    headers: headers,
    data: {},
    dataType: "JSON",
    body: JSON.stringify({ user })
  }).then(res => res.json())
};

const updateUser = (user) => {
  debugger;
  return fetch(`${API_ROOT}/users/${user.id}`, {
    method: 'PATCH',
    headers: headers,
    data: {},
    dataType: "JSON",
    body: JSON.stringify({ user })
  }).then(res => res.json());

};

const login = (username, password) => {
  return fetch(`${API_ROOT}/auth/`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ username, password })
  }).then(res => res.json());

};

const getCurrentUser = (username, password) => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers,
  }).then(res => res.json());

};

export default {
  auth: {
    login,
    getCurrentUser
  },
  questions: {
    addQuestion,
  },
  user: {
    addUser,
    updateUser
  }
};
