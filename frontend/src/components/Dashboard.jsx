import React from "react";
const Dashboard = () => {
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
