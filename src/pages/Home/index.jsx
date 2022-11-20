import { useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeesForm from '../../components/Form';
import Modal from '@patrice-h/custom-modal';

/**
 * Component that assembles multiple components and returns the home page
 *
 * Includes customized component
 * @see {@link https://www.npmjs.com/package/@patrice-h/custom-modal}
 * @see {@link EmployeesForm}
 * @component
 * @returns A function that returns the page
 */
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayModal = () => {
    setIsModalOpen(true);
  };
  const hideModal = () => {
    setIsModalOpen(false);
    window.location.reload();
  };

  return (
    <>
      <header className="page-title">
        <h1>HRnet</h1>
      </header>
      <div className="container">
        <Link to="/employees">View Current Employees</Link>
        <h2>Create Employee</h2>
        <EmployeesForm displayModal={displayModal} />
      </div>
      <Modal
        isOpen={isModalOpen}
        text="Employee created !"
        hideModal={hideModal}
      />
    </>
  );
};

export default Home;
