const API_ROOT = `http://localhost:3001/api/v1`;

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
};

const getQuestions = () => {
  return fetch(`${API_ROOT}/questions/`, {headers: headers})
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
    getQuestions
  }
};
