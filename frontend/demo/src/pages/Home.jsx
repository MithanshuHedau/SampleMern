import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import axios from "axios";

const Home = ({ userData }) => {
  const navigate = useNavigate();

  const handleCardClick = async (user) => {
    try {
      const id = user._id;
      const response = await axios.get(`https://api-5o7e.onrender.com/${id}`);
      console.log("User data fetched successfully:", response.data);
      navigate(`/user/${id}`, { state: { user: response.data } });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handelDelete = async (id) => {
    try {
      const response = await axios.delete(`https://api-5o7e.onrender.com/delete/${id}`);
      console.log("User deleted successfully:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-heading">
        User List
        <span>
          <button
            className="add-user-btn"
            onClick={() => navigate("/addUser")}
          >
            Add User
          </button>
        </span>
      </h1>

      {userData.length > 0 ? (
        <div className="card-grid">
          {userData.map((user, index) => (
            <div className="card" key={index}>
              <h2 className="card-title">{user.title}</h2>
              <p className="card-description">{user.description}</p>
              <div className="card-buttons">
                <div>
                  <button
                    onClick={() => handelDelete(user._id)}
                    className="btn btn-delete"
                  >
                    Delete
                  </button>
                </div>
                <div className="card-actions">
                  <button
                    onClick={() =>
                      navigate(`/editUser/${user._id}`, { state: { user } })
                    }
                    className="btn btn-edit"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleCardClick(user)}
                    className="btn btn-view"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-user">
          <h2>No Users Found</h2>
          <p>Please add some users to see the list.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
