import { createSlice } from '@reduxjs/toolkit';
import { getAllPatient } from '../../api/patient';

export const patientSlice = createSlice({
  name: 'patient',
  initialState: {
    patients: [],
  },
  reducers: {
    getAll: async () => {
      try {
        const response = await getAllPatient();
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
  },
});

export const { getAll } = patientSlice.actions;

export default patientSlice.reducer;
