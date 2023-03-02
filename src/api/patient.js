import axios from './axios';

export const getAllPatient = async () => {
  const response = await axios.get('/patients');
  return response;
};
