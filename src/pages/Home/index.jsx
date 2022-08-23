import { Link } from 'react-router-dom';
import EmployeesForm from '../../components/Form';
import Modal from '@patrice-h/my-modal';

/**
 * Component that assembles multiple components and returns the home page
 *
 * Includes custom component
 * @see {@link https://www.npmjs.com/package/@patrice-h/my-modal}
 * @see {@link EmployeesForm}
 * @component
 * @returns A function that returns the page
 */
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
