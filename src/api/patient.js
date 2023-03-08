import crud from './crud';

const api = new crud('/patients');

export const getAllPatient = async () => {
  return await api.getAll();
};
