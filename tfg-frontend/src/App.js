import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExamplesList from './views/ExamplesList';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">MERN Stack CRUD</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Examples</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Example</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<ExamplesList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
