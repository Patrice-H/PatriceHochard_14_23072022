import { Link } from 'react-router-dom';
import EmployeeForm from '../../components/EmployeeForm';
import closeModalBtn from '../../assets/close-btn.png';

const Home = () => {
  const hideModal = () => {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
  };

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
      <div id="modal" data-testid="modal" className="hidden">
        <div id="confirmation">
          <p>Employee Created!</p>
          <Link
            to="#"
            id="close-modal-btn"
            data-testid="close-modal-btn"
            onClick={hideModal}
          >
            <img src={closeModalBtn} alt="Close Modal" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
