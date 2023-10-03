import { configureStore } from '@reduxjs/toolkit';
import EmployeeSlice from '@store/slices/employee';

const store = configureStore({
  reducer: {
    employee: EmployeeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
