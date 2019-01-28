const API_ROOT = `http://localhost:3001/api/v1`;

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
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

const updateUser = (user) => {
  return fetch(`${API_ROOT}/users/${user.id}`, {
    method: 'POST',
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

export default {
  auth: {
    login
  },
  questions: {
    addQuestion,
  },
  user: {
    updateUser
  }
};
