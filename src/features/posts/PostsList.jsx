import React from "react";
import { useSelector } from "react-redux";
import { postsSelector } from "./selector";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(postsSelector);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.timeStamp.localeCompare(a.timeStamp));

  const renderPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timeStamp={post.timeStamp} />
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostsList;
