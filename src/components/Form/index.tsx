import Select from '@fsmnk/react-select-menu';
import { saveEmployee } from '@store/slices/employee';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';

const Form: React.FC = () => {
  const dispatch = useDispatch();

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

  const states = [
    {
      name: 'Alabama',
      abbreviation: 'AL',
    },
    {
      name: 'Alaska',
      abbreviation: 'AK',
    },
    {
      name: 'American Samoa',
      abbreviation: 'AS',
    },
    {
      name: 'Arizona',
      abbreviation: 'AZ',
    },
    {
      name: 'Arkansas',
      abbreviation: 'AR',
    },
    {
      name: 'California',
      abbreviation: 'CA',
    },
    {
      name: 'Colorado',
      abbreviation: 'CO',
    },
    {
      name: 'Connecticut',
      abbreviation: 'CT',
    },
    {
      name: 'Delaware',
      abbreviation: 'DE',
    },
    {
      name: 'District Of Columbia',
      abbreviation: 'DC',
    },
    {
      name: 'Federated States Of Micronesia',
      abbreviation: 'FM',
    },
    {
      name: 'Florida',
      abbreviation: 'FL',
    },
    {
      name: 'Georgia',
      abbreviation: 'GA',
    },
    {
      name: 'Guam',
      abbreviation: 'GU',
    },
    {
      name: 'Hawaii',
      abbreviation: 'HI',
    },
    {
      name: 'Idaho',
      abbreviation: 'ID',
    },
    {
      name: 'Illinois',
      abbreviation: 'IL',
    },
    {
      name: 'Indiana',
      abbreviation: 'IN',
    },
    {
      name: 'Iowa',
      abbreviation: 'IA',
    },
    {
      name: 'Kansas',
      abbreviation: 'KS',
    },
    {
      name: 'Kentucky',
      abbreviation: 'KY',
    },
    {
      name: 'Louisiana',
      abbreviation: 'LA',
    },
    {
      name: 'Maine',
      abbreviation: 'ME',
    },
    {
      name: 'Marshall Islands',
      abbreviation: 'MH',
    },
    {
      name: 'Maryland',
      abbreviation: 'MD',
    },
    {
      name: 'Massachusetts',
      abbreviation: 'MA',
    },
    {
      name: 'Michigan',
      abbreviation: 'MI',
    },
    {
      name: 'Minnesota',
      abbreviation: 'MN',
    },
    {
      name: 'Mississippi',
      abbreviation: 'MS',
    },
    {
      name: 'Missouri',
      abbreviation: 'MO',
    },
    {
      name: 'Montana',
      abbreviation: 'MT',
    },
    {
      name: 'Nebraska',
      abbreviation: 'NE',
    },
    {
      name: 'Nevada',
      abbreviation: 'NV',
    },
    {
      name: 'New Hampshire',
      abbreviation: 'NH',
    },
    {
      name: 'New Jersey',
      abbreviation: 'NJ',
    },
    {
      name: 'New Mexico',
      abbreviation: 'NM',
    },
    {
      name: 'New York',
      abbreviation: 'NY',
    },
    {
      name: 'North Carolina',
      abbreviation: 'NC',
    },
    {
      name: 'North Dakota',
      abbreviation: 'ND',
    },
    {
      name: 'Northern Mariana Islands',
      abbreviation: 'MP',
    },
    {
      name: 'Ohio',
      abbreviation: 'OH',
    },
    {
      name: 'Oklahoma',
      abbreviation: 'OK',
    },
    {
      name: 'Oregon',
      abbreviation: 'OR',
    },
    {
      name: 'Palau',
      abbreviation: 'PW',
    },
    {
      name: 'Pennsylvania',
      abbreviation: 'PA',
    },
    {
      name: 'Puerto Rico',
      abbreviation: 'PR',
    },
    {
      name: 'Rhode Island',
      abbreviation: 'RI',
    },
    {
      name: 'South Carolina',
      abbreviation: 'SC',
    },
    {
      name: 'South Dakota',
      abbreviation: 'SD',
    },
    {
      name: 'Tennessee',
      abbreviation: 'TN',
    },
    {
      name: 'Texas',
      abbreviation: 'TX',
    },
    {
      name: 'Utah',
      abbreviation: 'UT',
    },
    {
      name: 'Vermont',
      abbreviation: 'VT',
    },
    {
      name: 'Virgin Islands',
      abbreviation: 'VI',
    },
    {
      name: 'Virginia',
      abbreviation: 'VA',
    },
    {
      name: 'Washington',
      abbreviation: 'WA',
    },
    {
      name: 'West Virginia',
      abbreviation: 'WV',
    },
    {
      name: 'Wisconsin',
      abbreviation: 'WI',
    },
    {
      name: 'Wyoming',
      abbreviation: 'WY',
    },
  ];

  const handleSaveEmployee = () => {
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

    const employee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      startDate: startDate.value,
      department: department.value,
      street: street.value,
      city: city.value,
      employeeState: states.find((s) => state.value === s.name)?.abbreviation,
      zipCode: zipCode.value,
    };
    dispatch(saveEmployee(employee));
    openModal();
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

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
          <DatePicker
            selected={birthDate}
            id="date-of-birth"
            className="inputs"
            onChange={(date) => setBirthDate(date as Date)}
          />
        </div>

        <label htmlFor="start-date" className="labels">
          Start Date
        </label>
        <div className="mt-2">
          <DatePicker
            selected={startDate}
            id="start-date"
            className="inputs"
            onChange={(date) => setStartDate(date as Date)}
          />
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
      <button onClick={handleSaveEmployee} className="button">
        Save
      </button>
    </>
  );
};

export default Form;
