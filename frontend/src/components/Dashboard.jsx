import React from "react";
import HelperMessage from "./HelperMessage";
const Dashboard = ({ userNotFound, setUserNotFound }) => {
  return (
    <div className="Dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="underline">-</div>
      <div className="dashboard-container">
        <div className="profile-card">
          <img
            src="assets/avatar-default.png"
            alt="Avatar"
            className="avatar"
          />
          <div className="profile-details">
            <h1 className="full-name">Mritul Senthilkumar</h1>
            <h1 className="username">mritul___</h1>
            <h1 className="department">ECE</h1>
          </div>
        </div>
        <div className="underline underline-dashboard-mobile">-</div>
        <div className="search-field-card">
          <h1 className="main-title">
            Search for a profile by entering the username
          </h1>
          <form id="user-search-form">
            <input type="text" placeholder="Enter a username to search for" />
            <button className="btn search-user-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          {userNotFound && (
            <HelperMessage messageContent="Could not find the user" />
          )}
          <h1 className="title-msg">On finding a profile, you can:</h1>
          <div className="features">
            <p>
              <i className="fa-solid fa-check"></i>View the comments made by you
              on the user
            </p>
            <p>
              <i className="fa-solid fa-check"></i>Delete the comments made by
              you on the user
            </p>
            <p>
              <i className="fa-solid fa-check"></i>View the details of the user
            </p>
          </div>
        </div>
      </div>
      <div className="comments-container">
        <h1 className="comments-section-title">Comments</h1>
        <div className="underline">-</div>
        <p className="comments-section-instruction">
          This section displays all the comments made by other users on you. Use
          the delete button to remove the comment permanently.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
