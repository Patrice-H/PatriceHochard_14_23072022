import { Link } from 'react-router-dom';
import BottomTableDisplayOptions from '../../components/BottomTableDisplayOptions';
import EmployeesTable from '../../components/EmployeesTable';
import TableDisplayOptions from '../../components/TableDisplayOptions';

const Employees = () => {
  return (
    <>
      <header className="page-title">
        <h1>Current Employees</h1>
      </header>
      <div id="employees-page" className="container">
        <TableDisplayOptions />
        <EmployeesTable />
        <BottomTableDisplayOptions />
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default Employees;
