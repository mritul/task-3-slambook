import { useState } from "react";
const Comment = () => {
  // Hook to toggle the collapsible comment body
  // Comment body is conditionally rendered based on isOpen state(used as a toggle flag) which is toggled between true and false by adding event listener to the dropdown button
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Comment">
      <div className="comment-header">
        <div className="author-details">
          <img src="assets/avatar-default.png" alt="Avatar" />
          <div className="text-container">
            <h1 className="author-name">Mritul Senthilkumar</h1>
            <div className="other-author-details-panel">
              <p className="author-dept">
                <i className="fa-solid fa-building"></i>ECE
              </p>
              <p className="author-batch">
                <i className="fa-solid fa-calendar-days"></i>2025
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
          <button className="btn btn-delete">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="comment-body">
          <div className="question-group">
            <h1 className="question">Nicknames</h1>
            <p className="answer">Dumbledore, Pizza pan</p>
          </div>
          <div className="question-group">
            <h1 className="question">Best advice you've given/been given</h1>
            <p className="answer">
              Whoops! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Placeat eos laboriosam vitae velit nam natus. Incidunt, ducimus
              aliquid. Vero, ex aliquid officia ab voluptatum et?
            </p>
          </div>
          <div className="question-group">
            <h1 className="question">
              Craziest experience you've had with the person
            </h1>
            <p className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              similique ab saepe illum esse reprehenderit necessitatibus itaque,
              illo aperiam quisquam eveniet labore, delectus, voluptatem ipsa
              eligendi provident adipisci deserunt natus?
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
