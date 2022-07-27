import { Link } from 'react-router-dom';
import EmployeeForm from '../../components/EmployeeForm';

const Home = () => {
  return (
    <>
      <header className="page-title">
        <h1>HRnet</h1>
      </header>
      <div className="container">
        <Link to="/employees">View Current Employees</Link>
        <h2>Create Employee</h2>
        <EmployeeForm />
      </div>
    </>
  );
};

export default Home;
