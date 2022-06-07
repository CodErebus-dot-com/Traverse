import { useSelector } from "react-redux";
import { usersSelector } from "../users/selector";

const PostAuthor = ({ userId }) => {
  const users = useSelector(usersSelector);
  const author = users.find((user) => user.id === userId);

  return <span>~{author ? author.name : "Anonymous"}</span>;
};

export default PostAuthor;
