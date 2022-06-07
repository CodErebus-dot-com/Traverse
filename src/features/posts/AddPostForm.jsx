import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "./postsSlice";
import { usersSelector } from "../users/selector";
const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const canSubmit = [
    userId,
    title.length >= 3,
    body.length >= 10,
    addRequestStatus === "idle",
  ].every(Boolean);

  const savePost = (e) => {
    if (canSubmit) {
      try {
        setAddRequestStatus("pending");
        dispatch(addPost({ title, body, userId }));
        setTitle("");
        setBody("");
        setUserId("");
      } catch (err) {
        console.log("Failed to add post", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
    e.preventDefault();
  };

  const renderUsers = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="formContainer">
      <h2>Add a new post</h2>
      <form onSubmit={savePost}>
        <label htmlFor="postTitle">Post Title: </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength="30"
        />
        <label htmlFor="postAuthor">Author: </label>
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value="">Select author</option>
          {renderUsers}
        </select>
        <label htmlFor="postContent">Body: </label>
        <textarea
          id="postContent"
          name="postContent"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="5"
          maxLength="1000"
        />
        <button disabled={!canSubmit}>Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
