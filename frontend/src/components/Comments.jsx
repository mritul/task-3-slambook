import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import { useAuth } from "../utils/AuthContext";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const auth = useAuth();
  useEffect(() => {
    // The below fetch is to get all the comments on the user from the backend and display them
    axios({
      method: "GET",
      withCredentials: true,
      url: "https://slambook-back-end.herokuapp.com/authenticate",
    })
      .then((res) => {
        setComments(res.data.user.slambookAnswers);
      })
      .catch((err) => {
        throw err;
      });
  }, [auth.user]);
  return (
    <div className="Comments">
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
