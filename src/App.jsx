import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Templates from './components/Templates';
import Profile from './components/Profile';
import Login from "./components/Login";
import  Signup  from "./components/Signup";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="App">  
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/templates" element={<Templates />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
