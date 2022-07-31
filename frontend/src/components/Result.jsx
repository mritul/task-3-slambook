import { Link } from "react-router-dom";
const Result = ({ profile }) => {
  return (
    <div className="Result">
      <img src="assets/avatar-default.png" alt="Profile Pic" />
      <h1 className="card-full-name">{`${profile.firstName} ${profile.lastName}`}</h1>
      <div className="details-panel">
        <h1 className="card-batch">
          <i className="fa-solid fa-calendar-days"></i> {profile.batch}
        </h1>
        <h1 className="card-department">
          <i className="fa-solid fa-building"></i>
          {profile.department}
        </h1>
      </div>
      <Link className="link-text" to={`/profile/${profile._id}`}>
        <button className="btn btn-view-profile">View Profile</button>
      </Link>
    </div>
  );
};
export default Result;
