import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';

const App = (props) => {
  console.log(props);
  return (
    <Router>
        <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};


export default App;
