import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post",
    timeStamp: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      like: 3,
      wow: 0,
      heart: 1,
      fire: 0,
      haha: 1,
    },
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post",
    timeStamp: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      like: 6,
      wow: 2,
      heart: 0,
      fire: 2,
      haha: 3,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => ({
        payload: {
          id: nanoid(),
          title,
          content,
          timeStamp: new Date().toISOString(),
          userId,
          reactions: {
            like: 0,
            wow: 0,
            heart: 0,
            fire: 0,
            haha: 0,
          },
        },
      }),
    },
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      existingPost && existingPost.reactions[reaction]++;
    },
  },
});

export default postsSlice.reducer;
export const { postAdded, reactionAdded } = postsSlice.actions;
