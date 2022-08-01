import HelperMessage from "./components/HelperMessage";
import Results from "./components/Results";
import { useState } from "react";
import Protection from "./utils/Protection";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
const Search = () => {
  // Hook to handle input field
  const [searchDetails, setSearchDetails] = useState("");
  // Hook to store fetch results
  const [profiles, setProfiles] = useState([]);
  // Hook to store loading status
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchInput = (e) => {
    setSearchDetails(e.target.value);
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    axios({
      method: "GET",
      withCredentials: true,
      url: `https://slambook-back-end.herokuapp.com/api/get-profiles?name=${searchDetails}`,
    })
      .then((res) => {
        setProfiles(res.data.profiles);
        setSearchDetails("");
        setIsLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <Protection>
      <div className="search-field-card">
        <h1 className="main-title">Search for a user</h1>
        <form id="user-search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a username/first name to search for"
            value={searchDetails}
            onChange={handleSearchInput}
          />
          <button className="btn search-user-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <h1 className="title-msg">On finding a profile, you can:</h1>
        <div className="features">
          <p>
            <i className="fa-solid fa-check"></i>View the comments made by you
            on the user
          </p>
          <p>
            <i className="fa-solid fa-check"></i>Search can be made by first
            name or username
          </p>
          <p>
            <i className="fa-solid fa-check"></i>View the details of the user
          </p>
        </div>
        <div className="underline-lg">-</div>
        {isLoading ? (
          <InfinitySpin width="200" color="#4fa94d" />
        ) : (
          <Results profiles={profiles} />
        )}
      </div>
    </Protection>
  );
};

export default Search;
