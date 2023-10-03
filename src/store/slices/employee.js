import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: [],
  reducers: {
    saveEmployee: (state, action) => {
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
