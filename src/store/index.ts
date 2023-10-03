import { configureStore } from '@reduxjs/toolkit';
import EmployeeSlice from '@store/slices/employee';

const store = configureStore({
  reducer: {
    employee: EmployeeSlice,
  },
});

export default store;
