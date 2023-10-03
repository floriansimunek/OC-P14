import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Employee = {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  startDate?: string;
  department?: string;
  street?: string;
  city?: string;
  employeeState?: string;
  zipCode?: string;
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState: [] as Employee[],
  reducers: {
    saveEmployee: (state, action: PayloadAction<Employee>) => {
      const {
        firstName,
        lastName,
        dateOfBirth,
        startDate,
        department,
        street,
        city,
        employeeState,
        zipCode,
      } = action.payload;

      const newEmployee = {
        firstName,
        lastName,
        dateOfBirth,
        startDate,
        department,
        street,
        city,
        employeeState,
        zipCode,
      };

      state.push(newEmployee);
    },
  },
});

export const { saveEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
