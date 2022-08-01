import { useEffect, useState } from "react";
import Comment from "./Comment";
import { useAuth } from "../utils/AuthContext";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [id, setId] = useState("");
  const auth = useAuth();
  useEffect(() => {
    if (auth.user) {
      // To display the comments(slambook answers) made on the user by other users, we get the details of the comments from the auth context
      setComments(auth.user.slambookAnswers);
      setId(auth.user._id);
    }
  }, [auth.user]);
  return (
    <div className="Comments">
      {/* If there are no comments for the user([{}] in the database for slambookAnswers), nothing is displayed. Else comment is rendered  */}
      {/* {console.log(comments)} */}
      {JSON.stringify(comments[0]) !== "{}"
        ? comments.map((comment, idx) => (
            <Comment
              comment={comment}
              id={id}
              setComments={setComments}
              key={idx}
              comments={comments}
            />
          ))
        : ""}
    </div>
  );
};

export default Comments;
