import Form from '@components/Form';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form />
      </div>
    </>
  );
};

export default Home;
