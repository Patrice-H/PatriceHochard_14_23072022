import { Link } from 'react-router-dom';
import EmployeesTable from '../../components/Table';

/**
 * Component that assembles multiple components and returns the employees page
 *
 * @component
 * @see {@link EmployeesTable}
 * @returns A function that returns the page
 */
const Employees = () => {
  return (
    <div id="page-container">
      <header className="page-title">
        <h1>Current Employees</h1>
      </header>
      <div id="employees-page" className="container">
        <EmployeesTable />
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Employees;
