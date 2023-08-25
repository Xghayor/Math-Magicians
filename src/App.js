import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Quote from './components/Quotes';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="Calculator"
          element={(
            <div>
              <h2 className="math-element">Let&apos;s do some Math!</h2>
              <Calculator />
            </div>
)}
        />
        <Route
          path="Quote"
          element={(

            <Quote />)}
        />
        <Route path="*" element={<div>If page not found it goes here</div>} />
      </Route>
    </Routes>
  </Router>
);

export default App;
