import { Link } from 'react-router-dom';
import BottomTableDisplayOptions from '../../components/table-components/BottomTableDisplayOptions';
import EmployeeTable from '../../components/EmployeeTable';
import TableDisplayOptions from '../../components/table-components/TableDisplayOptions';

const Employees = () => {
  return (
    <>
      <header className="page-title">
        <h1>Current Employees</h1>
      </header>
      <div id="employees-page" className="container">
        <TableDisplayOptions />
        <EmployeeTable />
        <BottomTableDisplayOptions />
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default Employees;
