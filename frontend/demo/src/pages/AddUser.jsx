import axios from "axios";
import React from "react";
import "./AddUser.css";


const AddUser = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://api-5o7e.onrender.com/add", {
        title,
        description,
      });
      window.location.href = "/";
    } catch (error) {
      console.error("Error adding user:", error);
    }
    setTitle("");
    setDescription("");
  };

  return (
    <>

      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
            name="title"
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            name="description"
            required
          ></textarea>
        </div>
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default AddUser;
