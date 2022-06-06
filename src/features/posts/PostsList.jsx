import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  postsSelector,
  postsStatusSelector,
  postsErrorSelector,
} from "./selector";
import PostsExcerpt from "./PostsExcerpt";
import { fetchPosts } from "./postsSlice";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelector);
  const status = useSelector(postsStatusSelector);
  const error = useSelector(postsErrorSelector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  let content;
  if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }
  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
