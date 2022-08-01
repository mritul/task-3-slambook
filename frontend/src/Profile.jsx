import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Protection from "./utils/Protection";
import { useAuth } from "./utils/AuthContext";
import axios from "axios";
const Profile = () => {
  const userId = useParams();
  const [selfLoggedIn, setSelfLoggedIn] = useState(false);
  const [profileDetails, setProfileDetails] = useState(null);
  const auth = useAuth();
  // useEffect to check if the user in the session i.e logged in, is same as the user searched for. If yes, a message is displayed instead of the profile
  useEffect(() => {
    if (auth.user) {
      if (auth.user._id == userId.id) {
        setSelfLoggedIn(true);
      }
    }
  }, [auth.user]);

  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `http://localhost:5000/api/get-user-details?id=${userId.id}`,
    })
      .then((res) => {
        setProfileDetails(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <Protection>
      {selfLoggedIn ? (
        "Cannot view own profile"
      ) : (
        <div className="Profile">
          <div className="dashboard-container">
            <div className="profile-card">
              <img
                src="../../assets/avatar-default.png"
                alt="Avatar"
                className="avatar"
              />
              <div className="profile-details">
                <h1 className="full-name">
                  {profileDetails
                    ? `${profileDetails.firstName} ${profileDetails.lastName}`
                    : ""}
                </h1>
                <h1 className="username">
                  <i className="fa-solid fa-user"></i>
                  {profileDetails ? profileDetails.username : ""}
                </h1>
                <h1 className="department">
                  <i className="fa-solid fa-building"></i>
                  {profileDetails ? profileDetails.department : ""}
                </h1>
                <h1 className="batch">
                  <i className="fa-solid fa-calendar-days"></i>
                  {profileDetails ? profileDetails.batch : ""}
                </h1>
              </div>
            </div>
            <div className="about-me">
              <h1>About me</h1>
              <p>{profileDetails ? profileDetails.about : ""}</p>
            </div>
          </div>
          <div className="write-slam-book-section">
            <Link
              className="link-text write-slam-book-link"
              to={`/slambook/${userId.id}`}
            >
              Write Slambook
            </Link>
          </div>
        </div>
      )}
    </Protection>
  );
};

export default Profile;
