import axios from './axios';

export const login = async function (data) {
  const response = await axios.post('/users/login', { ...data });
  return response;
};
