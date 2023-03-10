import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth';
import patientReducer from './reducers/patient';

export default configureStore({
  reducer: {
    auth: authReducer,
    patient: patientReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({ serializableCheck: false }),
});
