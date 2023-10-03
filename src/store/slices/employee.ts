import { createSlice } from '@reduxjs/toolkit';

const initialState = () => {
  return {
    firstName: null,
    lastName: null,
    dateOfBirth: null,
    startDate: null,
    department: null,
    street: null,
    city: null,
    employeeState: null,
    zipCode: null,
  };
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState: initialState(),
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

      state.firstName = firstName;
      state.lastName = lastName;
      state.dateOfBirth = dateOfBirth;
      state.startDate = startDate;
      state.department = department;
      state.street = street;
      state.city = city;
      state.employeeState = employeeState;
      state.zipCode = zipCode;
    },
  },
});

export const { saveEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
