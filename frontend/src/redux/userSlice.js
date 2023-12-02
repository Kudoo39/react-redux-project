import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Khang Nguyen",
    age: "21",
    about: "I am a full-stack developer",
    avatar: "https://i.redd.it/0gaywfkq6l071.png",
    theme: "#ccda07",
    pending: false,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avatar = action.payload.avatar;
      state.theme = action.payload.theme;
    },
    // update: (state, action) => {
    //   state.name = action.payload.name;
    //   state.age = action.payload.age;
    //   state.about = action.payload.about;
    //   state.avatar = action.payload.avatar;
    //   state.theme = action.payload.theme;
  },
});

export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
