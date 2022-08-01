import { useState } from "react";
import axios from "axios";
const Comment = ({ comment, id }) => {
  // Hook to toggle the collapsible comment body
  // Comment body is conditionally rendered based on isOpen state(used as a toggle flag) which is toggled between true and false by adding event listener to the dropdown button
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle deleting the comment
  const deleteComment = () => {
    console.log("Clicked");
    axios({
      method: "DELETE",
      withCredentials: true,
      url: `https://slambook-back-end.herokuapp.com/api/delete-slambook/${comment.id}?id=${id}`,
    })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div className="Comment">
      <div className="comment-header">
        <div className="author-details">
          <img src="assets/avatar-default.png" alt="Avatar" />
          <div className="text-container">
            <h1 className="author-name">{comment.authorName}</h1>
            <div className="other-author-details-panel">
              <p className="author-dept">
                <i className="fa-solid fa-building"></i>
                {comment.authorDepartment}
              </p>
              <p className="author-batch">
                <i className="fa-solid fa-calendar-days"></i>
                {comment.authorBatch}
              </p>
            </div>
          </div>
        </div>
        <div className="comment-btn-panel">
          <button
            className="btn btn-dropdown"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fa-solid fa-caret-down"></i>
          </button>
          <button className="btn btn-delete" onClick={deleteComment}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="comment-body">
          <div className="question-group">
            <h1 className="question">Nicknames</h1>
            <p className="answer">{comment.answer1}</p>
          </div>
          <div className="question-group">
            <h1 className="question">Best advice you've given/been given</h1>
            <p className="answer">{comment.answer2}</p>
          </div>
          <div className="question-group">
            <h1 className="question">
              Craziest experience you've had with the person
            </h1>
            <p className="answer">{comment.answer3}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
