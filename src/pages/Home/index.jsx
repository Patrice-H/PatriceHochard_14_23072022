import { Link } from 'react-router-dom';
import EmployeesForm from '../../components/Form';
import Modal from '../../components/Modal';

const Home = () => {
  return (
    <>
      <header className="page-title">
        <h1>HRnet</h1>
      </header>
      <div className="container">
        <Link to="/employees">View Current Employees</Link>
        <h2>Create Employee</h2>
        <EmployeesForm />
      </div>
      <Modal />
    </>
  );
};

export default Home;
