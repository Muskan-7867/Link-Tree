import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Register/Signup';
import TemplateDetail from './pages/Templates/TemplateDetail';
import Navbar from './components/Navbar/Navbar';
import Profile from './pages/Profile/Profile';
import Templates from './pages/Templates/Templates';

const App: React.FC = () => {
  const location = useLocation();

  // Condition to check if the current path is a template detail page
  const hideNavbar = location.pathname.startsWith('/templates/') && location.pathname !== '/templates';

  return (
    <div className="App">
      {/* Render Navbar only when hideNavbar is false */}
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/templates/:id" element={<TemplateDetail />} /> {/* Dynamic Template Route */}
      </Routes>
    </div>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
