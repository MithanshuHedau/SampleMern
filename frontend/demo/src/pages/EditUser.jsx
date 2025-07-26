import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
import "./EditUser.css";

const EditUser = () => {
  const location = useLocation();
  const { user } = location.state || {};

  const handelSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    try {
      await axios.put(`https://api-5o7e.onrender.com/edit/${user._id}`, {
        title,
        description,
      });
      console.log("User updated successfully");
      window.location.href = `/`;
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <form className="edit-form" onSubmit={handelSubmit}>
      <h1>Edit User</h1>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" defaultValue={user ? user.title : ""} />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          defaultValue={user ? user.description : ""}
        ></textarea>
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditUser;
