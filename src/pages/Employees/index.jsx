import { Link } from 'react-router-dom';
import EmployeesTable from '../../components/Table';

const Employees = () => {
  return (
    <>
      <header className="page-title">
        <h1>Current Employees</h1>
      </header>
      <div id="employees-page" className="container">
        <EmployeesTable />
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default Employees;
