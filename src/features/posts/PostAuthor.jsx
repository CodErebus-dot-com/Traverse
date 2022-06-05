import { useSelector } from "react-redux";
import { usersSelector } from "../users/selector";

const PostAuthor = ({ userId }) => {
  const users = useSelector(usersSelector);
  const author = users.find((user) => user.id === userId);

  return <p>By {author ? author.name : "Anonymous"}</p>;
};

export default PostAuthor;
