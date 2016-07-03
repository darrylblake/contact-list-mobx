import axios from 'axios';

const _baseURL = 'http://jsonplaceholder.typicode.com';

export function getUsers() {
  return axios.get(`${_baseURL}/users/`);
}

export function getUser(id) {
  return axios.get(`${_baseURL}/users/${id}`);
}