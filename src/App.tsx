// import { useState } from 'react'
// import './App.css'
import Home from './pages/Home.tsx'
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  </Router>
  );
}

export default App
