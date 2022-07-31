import { Link } from 'react-router-dom';
import EmployeesTable from '../../components/EmployeesTable';
import TableDisplayOptions from '../../components/TableDisplayOptions';

const Employees = () => {
  return (
    <>
      <header className="page-title">
        <h1>Current Employees</h1>
      </header>
      <div className="container">
        <TableDisplayOptions />
        <EmployeesTable />
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default Employees;
