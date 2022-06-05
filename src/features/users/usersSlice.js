import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "John Doe",
  },
  {
    id: "1",
    name: "Jane Doe",
  },
  {
    id: "2",
    name: "Jack Doe",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
// export const { } = usersSlice.actions;
