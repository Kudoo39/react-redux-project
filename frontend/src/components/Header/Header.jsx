import React from "react";
import "./Header.css";

const Header = (props) => {
  const { setEdit } = props;
  const handleEdit = () => {
    setEdit(true);
  };
  return (
    <>
      <header
        style={{
          backgroundColor: "#ccda07",
          backgroundImage: "linear-gradient(180deg, #ccda07 2%, #000000 100%)",
        }}
      >
        <div className="info-container">
          <div className="info-edit" onClick={handleEdit}>
            Edit
          </div>
          <img
            className="info-ava"
            src="https://i.redd.it/0gaywfkq6l071.png"
            alt=""
          />
          <div className="info-username">Khang Nguyen</div>
          <div className="info-age">21 years old</div>
          <div className="info-about">I'm a full-stack developer</div>
        </div>
      </header>
    </>
  );
};

export default Header;
