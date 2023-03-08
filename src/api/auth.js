import axios from './axios';

const baseURL = '/users';

const to = (path) => `${baseURL}/${path}`;

export const login = async function (data) {
  const response = await axios.post(to('login'), { ...data });
  return response;
};

export const logout = async function () {
  const response = await axios.get(to('logout'));
  return response;
};

export const logged = async function () {
  const response = await axios.get(to('logged'));
  return response;
};
