import React from "react";
import Comments from "./components/Comments";
import Protection from "./utils/Protection";
import { useAuth } from "./utils/AuthContext";
const Dashboard = () => {
  const auth = useAuth();
  return (
    <Protection>
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
              <h1 className="full-name">
                {auth.user
                  ? `${auth.user.firstName} ${auth.user.lastName}`
                  : "N/A"}
              </h1>
              <h1 className="username">
                <i className="fa-solid fa-user"></i>
                {auth.user ? auth.user.username : "N/A"}
              </h1>
              <h1 className="department">
                <i className="fa-solid fa-building"></i>
                {auth.user ? auth.user.department : "N/A"}
              </h1>
              <h1 className="batch">
                <i className="fa-solid fa-calendar-days"></i>
                {auth.user ? auth.user.batch : "N/A"}
              </h1>
            </div>
          </div>
          <div className="about-me">
            <h1>About me</h1>
            <p>{auth.user ? auth.user.about : "N/A"}</p>
          </div>
        </div>
        <div className="comments-container">
          <h1 className="comments-section-title">Comments</h1>
          <div className="underline">-</div>
          <p className="comments-section-instruction">
            This section displays all the comments made by other users on you.
            Use the delete button to remove the comment permanently and use the
            arrow to expand the comment
          </p>
          <Comments />
        </div>
      </div>
    </Protection>
  );
};

export default Dashboard;
