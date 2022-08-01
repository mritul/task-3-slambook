import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Comment from "./Comment";

const Comments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    // The below fetch is to get all the comments on the user from the backend and display them
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/authenticate",
    })
      .then((res) => {
        setComments(res.data.user.slambookAnswers);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <div className="Comments">
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
