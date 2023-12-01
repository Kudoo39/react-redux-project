import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = (props) => {
  const { setEdit } = props;
  const user = useSelector((state) => state.user);
  const handleEdit = () => {
    setEdit(true);
  };
  return (
    <>
      <header
        style={{
          backgroundColor: `${user.theme}`,
          backgroundImage: `linear-gradient(180deg, ${user.theme} 2%, #000000 100%)`,
        }}
      >
        <div className="info-container">
          <div className="info-edit" onClick={handleEdit}>
            Edit
          </div>
          <img className="info-ava" src={user.avatar} alt="" />
          <div className="info-username">{user.name}</div>
          <div className="info-age">{user.age}</div>
          <div className="info-about">{user.about}</div>
        </div>
      </header>
    </>
  );
};

export default Header;
