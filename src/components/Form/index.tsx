import Select from '@fsmnk/react-select-menu';

const Form: React.FC = () => {
  const stateOptions = [
    { value: 'Alabama' },
    { value: 'Alaska' },
    { value: 'American Samoa' },
    { value: 'Arizona' },
    { value: 'Arkansas' },
    { value: 'California' },
    { value: 'Colorado' },
    { value: 'Connecticut' },
    { value: 'Delaware' },
    { value: 'District Of Columbia' },
    { value: 'Federated States Of Micronesia' },
    { value: 'Florida' },
    { value: 'Georgia' },
    { value: 'Guam' },
    { value: 'Hawaii' },
    { value: 'Idaho' },
    { value: 'Illinois' },
    { value: 'Indiana' },
    { value: 'Iowa' },
    { value: 'Kansas' },
    { value: 'Kentucky' },
    { value: 'Louisiana' },
    { value: 'Maine' },
    { value: 'Marshall Islands' },
    { value: 'Maryland' },
    { value: 'Massachusetts' },
    { value: 'Michigan' },
    { value: 'Minnesota' },
    { value: 'Mississippi' },
    { value: 'Missouri' },
    { value: 'Montana' },
    { value: 'Nebraska' },
    { value: 'Nevada' },
    { value: 'New Hampshire' },
    { value: 'New Jersey' },
    { value: 'New Mexico' },
    { value: 'New York' },
    { value: 'North Carolina' },
    { value: 'North Dakota' },
    { value: 'Northern Mariana Islands' },
    { value: 'Ohio' },
    { value: 'Oklahoma' },
    { value: 'Oregon' },
    { value: 'Palau' },
    { value: 'Pennsylvania' },
    { value: 'Puerto Rico' },
    { value: 'Rhode Island' },
    { value: 'South Carolina' },
    { value: 'South Dakota' },
    { value: 'Tennessee' },
    { value: 'Texas' },
    { value: 'Utah' },
    { value: 'Vermont' },
    { value: 'Virgin Islands' },
    { value: 'Virginia' },
    { value: 'Washington' },
    { value: 'West Virginia' },
    { value: 'Wisconsin' },
    { value: 'Wyoming' },
  ];

  const departementOptions = [
    { value: 'Sales' },
    { value: 'Marketing' },
    { value: 'Engineering' },
    { value: 'Human Resources' },
    { value: 'Legal' },
  ];

  const selectStyles = {
    select: {
      width: '100%',
      marginTop: '1rem',
      marginBottom: '10px',
    },
    list: {
      backgroundColor: 'white',
    },
  };

  const saveEmployee = () => {
    const firstName = document.getElementById('first-name') as HTMLInputElement;
    const lastName = document.getElementById('last-name') as HTMLInputElement;
    const dateOfBirth = document.getElementById(
      'date-of-birth',
    ) as HTMLInputElement;
    const startDate = document.getElementById('start-date') as HTMLInputElement;
    const department = document.getElementById(
      'rsm-department',
    ) as HTMLInputElement;
    const street = document.getElementById('street') as HTMLInputElement;
    const city = document.getElementById('city') as HTMLInputElement;
    const state = document.getElementById('rsm-state') as HTMLInputElement;
    const zipCode = document.getElementById('zip-code') as HTMLInputElement;

    const storedEmployees = localStorage.getItem('employees');
    const employees = storedEmployees ? JSON.parse(storedEmployees) : [];
    const employee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      startDate: startDate.value,
      department: department.value,
      street: street.value,
      city: city.value,
      state: state.value,
      zipCode: zipCode.value,
    };
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
    <>
      <form action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" />

        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="text" />
        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" />

          <label htmlFor="city">City</label>
          <input id="city" type="text" />

          <Select
            id="state"
            options={stateOptions}
            label="State"
            style={selectStyles}
            defaultValue={stateOptions[0].value}
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </fieldset>
        <Select
          id="department"
          options={departementOptions}
          label="Department"
          style={selectStyles}
          defaultValue={departementOptions[0].value}
        />
      </form>
      <button onClick={saveEmployee}>Save</button>
    </>
  );
};

export default Form;
