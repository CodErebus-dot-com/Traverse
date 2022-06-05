import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const emoticonsLookup = {
  like: "👍",
  heart: "❤️",
  wow: "😮",
  haha: "😂",
  fire: "🔥",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(emoticonsLookup).map(
    ([name, emoji]) => (
      <button
        key={name}
        className="reactionButton"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    )
  );

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
