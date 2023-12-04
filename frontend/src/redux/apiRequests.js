import { updateStart, updateError, updateSuccess } from "./userSlice";
import axios from "axios";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post(
      "https://react-redux-project-kudoo39.vercel.app/v1/update",
      user
    );
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateError());
  }
};
