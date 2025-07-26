import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import User from "./pages/User";
import EditUser from "./pages/EditUser";
import AddUser from "./pages/AddUser";
const App = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/allUser");
      setUserData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to User Management</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home userData={userData} />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/editUser/:id" element={<EditUser />} />
          <Route path="/addUser" element={<AddUser />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
