import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post",
    timeStamp: sub(new Date(), { minutes: 5 }).toISOString(),
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post",
    timeStamp: sub(new Date(), { minutes: 10 }).toISOString(),
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
        },
      }),
    },
  },
});

export default postsSlice.reducer;
export const { postAdded } = postsSlice.actions;
