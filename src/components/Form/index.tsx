import Select, { Option } from '@fsmnk/react-select-menu';

const Form: React.FC = () => {
  const stateOptions: Option = [
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
          id="departement"
          options={departementOptions}
          label="Department"
          style={selectStyles}
          defaultValue={departementOptions[0].value}
        />
      </form>
      <button>Save</button>
    </>
  );
};

export default Form;
