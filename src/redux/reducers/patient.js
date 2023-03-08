import { createSlice } from '@reduxjs/toolkit';
import { getAllPatient } from '../../api/patient';

export const patientSlice = createSlice({
  name: 'patient',
  initialState: {
    patients: [],
  },
  reducers: {
    getAll: async (state) => {
      try {
        const response = await getAllPatient();
        state.patients = response.data?.data.patients;
      } catch (e) {
        console.log(e);
      }
    },
  },
});

export const { getAll } = patientSlice.actions;

export default patientSlice.reducer;
