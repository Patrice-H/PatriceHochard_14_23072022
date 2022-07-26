import { Link } from 'react-router-dom';

const Employees = () => {
  return (
    <>
      <header className="page-title">
        <h1>Current Employees</h1>
      </header>
      <div className="container">
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default Employees;
