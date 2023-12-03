import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import portReducer from "./postSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});
