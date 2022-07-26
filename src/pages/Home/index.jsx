import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header className="page-title">
        <h1>HRnet</h1>
      </header>
      <div className="container">
        <Link to="/employees">View Current Employees</Link>
      </div>
    </>
  );
};

export default Home;
