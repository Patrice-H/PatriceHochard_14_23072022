import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Employees from './pages/Employees';
import Home from './pages/Home';

/**
 * Router logic
 *
 * @returns {Jsx} App
 */
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </Router>
  );
};

export default App;
