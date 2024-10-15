import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Register/Signup";
import Templates from "./pages/Templates/Templates";
import Profile from './pages/Profile/Profile';
import TemplateDetail from "./pages/Templates/TemplateDetail";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        hello world
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/templates/" element={<Templates />} />
          <Route path="/profile" element={<Profile />} />
          {/* `id` is expected to be a string parameter */}
          <Route path="/templates/:id" element={<TemplateDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
