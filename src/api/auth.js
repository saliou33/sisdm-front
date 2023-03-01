import axios from './axios';

export const login = async function (data) {
  const res = await axios.post('/users/login', { ...data });
  return res;
};
