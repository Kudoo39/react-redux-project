import React from "react";
import "./Edit.css";

const Edit = () => {
  return (
    <>
      <form>
        <div className="edit-container">
          <button className="close">Save</button>
        </div>
        <div className="edit-profile">Edit Profile</div>
        <div className="input-container">
          <label htmlFor="">Display name</label>
          <input type="text" placeholder="Khang Nguyen" />
          <label htmlFor="">Age</label>
          <input type="text" placeholder="21" />
          <label htmlFor="">About</label>
          <textarea className="input-about"></textarea>
        </div>
      </form>
    </>
  );
};

export default Edit;
