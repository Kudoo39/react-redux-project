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
});
