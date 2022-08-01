import { useEffect, useState } from "react";
import Comment from "./Comment";
import { useAuth } from "../utils/AuthContext";
import { InfinitySpin } from "react-loader-spinner";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const auth = useAuth();
  useEffect(() => {
    // To display the comments(slambook answers) made on the user by other users
    setComments(auth.user.slambookAnswers);
  }, [auth.user]);
  return (
    <div className="Comments">
      {JSON.stringify(comments[0]) !== "{}" ? (
        <Comment comments={comments} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Comments;
