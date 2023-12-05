import { updateStart, updateError, updateSuccess } from "./userSlice";
import axios from "axios";
const axios = require("axios");

const api = axios.create({
  baseURL: "https://react-redux-project-rust.vercel.app/",
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
