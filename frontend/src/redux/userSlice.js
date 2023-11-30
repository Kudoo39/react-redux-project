import { createSlide } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Khang Nguyen",
    age: "21",
    about: "I am a full-stack developer",
    avatar: "https://i.redd.it/0gaywfkq6l071.png",
    theme: "#ccda07",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avatar = action.payload.avatar;
      state.theme = action.payload.theme;
    },
  },
});
