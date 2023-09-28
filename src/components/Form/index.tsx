import Select from '@fsmnk/react-select-menu';
import { useState } from 'react';
import Modal from 'react-modal';

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
    openModal();
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal isOpen={modalIsOpen}>
        <button onClick={closeModal}>close</button>
        <p>Employee Created!</p>
      </Modal>
      <form action="#" id="create-employee">
        <label htmlFor="first-name" className="labels">
          First Name
        </label>
        <div className="mt-2">
          <input type="text" id="first-name" className="inputs" />
        </div>

        <label htmlFor="last-name" className="labels">
          Last Name
        </label>
        <div className="mt-2">
          <input type="text" id="last-name" className="inputs" />
        </div>

        <label htmlFor="date-of-birth" className="labels">
          Date of Birth
        </label>
        <div className="mt-2">
          <input id="date-of-birth" type="text" className="inputs" />
        </div>

        <label htmlFor="start-date" className="labels">
          Start Date
        </label>
        <div className="mt-2">
          <input id="start-date" type="text" className="inputs" />
        </div>

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street" className="labels">
            Street
          </label>
          <div className="mt-2">
            <input id="street" type="text" className="inputs" />
          </div>

          <label htmlFor="city" className="labels">
            City
          </label>
          <div className="mt-2">
            <input id="city" type="text" className="inputs" />
          </div>

          <Select
            id="state"
            options={stateOptions}
            label="State"
            style={selectStyles}
            defaultValue={stateOptions[0].value}
            zIndex={2}
          />

          <label htmlFor="zip-code" className="labels">
            Zip Code
          </label>
          <div className="mt-2">
            <input id="zip-code" type="number" className="inputs" />
          </div>
        </fieldset>
        <Select
          id="department"
          options={departementOptions}
          label="Department"
          style={selectStyles}
          defaultValue={departementOptions[0].value}
          zIndex={1}
        />
      </form>
      <button onClick={saveEmployee} className="button">
        Save
      </button>
    </>
  );
};

export default Form;
