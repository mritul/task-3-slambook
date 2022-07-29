import HelperMessage from "./components/HelperMessage";
import Results from "./components/Results";
import { useState } from "react";
const Search = () => {
  //useState hook to show helper message if user is not found on searching for profile
  const [userNotFound, setUserNotFound] = useState(false);

  return (
    <div className="search-field-card">
      <h1 className="main-title">Search for a user</h1>
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
          <i className="fa-solid fa-check"></i>View the comments made by you on
          the user
        </p>
        <p>
          <i className="fa-solid fa-check"></i>Delete the comments made by you
          on the user
        </p>
        <p>
          <i className="fa-solid fa-check"></i>View the details of the user
        </p>
      </div>
      <div className="underline-lg">-</div>
      <Results />
    </div>
  );
};

export default Search;
