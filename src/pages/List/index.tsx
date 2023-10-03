import DataTable from '@ognimelo/hrnet-datatable';
import { RootState } from '@store/index';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const List = () => {
  const employees = useSelector((state: RootState) => [...state.employee]);
  const columns = [
    { title: 'First Name', data: 'firstName' },
    { title: 'Last Name', data: 'lastName' },
    { title: 'Start Date', data: 'startDate' },
    { title: 'Department', data: 'department' },
    { title: 'Date of Birth', data: 'dateOfBirth' },
    { title: 'Street', data: 'street' },
    { title: 'City', data: 'city' },
    { title: 'State', data: 'state' },
    { title: 'Zip Code', data: 'zipCode' },
  ];

  return (
    <>
      <div className="title">
        <h1 className="title">HRnet</h1>
      </div>
      <div className="container">
        <Link to="/" className="small-button">
          Create employee
        </Link>
        <h2 className="subtitle">Employees</h2>
        <DataTable columns={columns} data={employees} />
      </div>
    </>
  );
};

export default List;
