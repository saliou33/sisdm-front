import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import patient from '../../api/patient';

export const getAllPatient = createAsyncThunk('patient/get', async () => {
  const response = await patient.getAll();
  return response;
});

export const deletePatient = createAsyncThunk(
  'patient/delete',
  async (data) => {
    const response = await patient.deleteOne(data.id);
    return response;
  }
);

export const updatePatient = createAsyncThunk(
  'patient/update',
  async (data) => {
    const response = await patient.updateOne(data.id, data.body);
    return response;
  }
);

export const getPatient = createAsyncThunk('patient/show', async (data) => {
  const response = await patient.getOne(data.id);
  return response;
});

export const patientSlice = createSlice({
  name: 'patient',
  initialState: {
    patients: [],
  },
  reducers: {},
});

export default patientSlice.reducer;
