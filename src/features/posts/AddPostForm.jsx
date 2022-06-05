import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";
import { usersSelector } from "../users/selector";
const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const canSubmit = userId && title && content;

  const savePost = (e) => {
    canSubmit && dispatch(postAdded(title, content, userId));
    setTitle("");
    setContent("");
    e.preventDefault();
  };

  const renderUsers = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a new post</h2>
      <form onSubmit={savePost}>
        <label htmlFor="postTitle">Post Title: </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postAuthor">Author: </label>
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value="" />
          {renderUsers}
        </select>
        <label htmlFor="postContent"> Content: </label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button disabled={!canSubmit}>Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
