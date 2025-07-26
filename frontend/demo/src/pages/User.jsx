import React from "react";
import { useLocation } from "react-router-dom";
import "./User.css";  

const User = () => {
  const location = useLocation();
  const { user } = location.state || {};

  if (!user) {
    return <p className="user-empty">No user data available.</p>;
  }

  return (
    <div className="user-container">
      <h1 className="user-title">User Details</h1>
      <h2 className="user-subtitle">Title: {user.title}</h2>
      <p className="user-description">Description: {user.description}</p>
    </div>
  );
};

export default User;
