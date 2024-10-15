// pages/Home/Home.tsx
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-start mt-[15%] ml-20 p-10 h-screen text-white main-content">
      <h1 className="mb-2 font-extrabold text-4xl">Welcome to Our Website!!</h1>
      <p className="mb-6 text-lg">Explore our templates and get started today!</p>
      <Link to="/templates">
        <button className="bg-blue-600 hover:bg-blue-300 px-6 py-3 rounded-md text-white transition duration-200">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Home;
