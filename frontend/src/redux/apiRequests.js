import { updateStart, updateError, updateSuccess } from "./userSlice";
import axios from "axios";
const axios = require("axios");

const api = axios.create({
  baseURL: "react-redux-project-mixx-kudoo39.vercel.app",
});

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post("/v1/update", user);
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateError());
  }
};
