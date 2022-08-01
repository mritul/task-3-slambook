import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Protection from "./utils/Protection";
import { useAuth } from "./utils/AuthContext";
import { nanoid } from "nanoid";

const SlamBook = () => {
  // To send post request to modify data of user with this id
  const userId = useParams();

  // To get the details of author(person who is logged in and is making the comment)
  const auth = useAuth();

  const navigate = useNavigate();

  // useState hook to handle input fields of the slambook form
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");

  // Functions to handle input fields
  const handleAnswer1Input = (e) => {
    setAnswer1(e.target.value);
  };
  const handleAnswer2Input = (e) => {
    setAnswer2(e.target.value);
  };
  const handleAnswer3Input = (e) => {
    setAnswer3(e.target.value);
  };

  //Function to handle submission of form
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      withCredentials: true,
      data: {
        id: nanoid(),
        authorName: auth.user.firstName + " " + auth.user.lastName,
        authorDepartment: auth.user.department,
        authorBatch: auth.user.batch,
        answer1: answer1,
        answer2: answer2,
        answer3: answer3,
      },
      url: `http://localhost:5000/api/slambook/${userId.id}`,
    })
      .then((res) => {
        setAnswer1("");
        setAnswer2("");
        setAnswer3("");
        navigate("/search");
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <Protection>
      <div className="SlamBook">
        <h1 className="slam-book-title">Write the slambook</h1>
        <form id="slam-page-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nicknames</label>
            <input
              type="text"
              required
              value={answer1}
              onChange={handleAnswer1Input}
            />
          </div>
          <div className="form-group">
            <label>Best advice you've given/been given</label>
            <textarea
              type="text"
              required
              value={answer2}
              onChange={handleAnswer2Input}
            />
          </div>
          <div className="form-group">
            <label>Craziest experience you've had with the person</label>
            <textarea
              type="text"
              required
              value={answer3}
              onChange={handleAnswer3Input}
            />
          </div>
          {/* Can be added in the future */}
          {/* <div className="form-group">
          <label>Upload an image</label>
          <input type="file" />
        </div> */}
          <button className="btn btn-comment">Comment</button>
        </form>
      </div>
    </Protection>
  );
};

export default SlamBook;
