import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header
        style={{
          backgroundColor: "#c2a544",
          backgroundImage: "linear-gradient(180deg, #c2a544 2%, #000000 100%)",
        }}
      >
        <div className="info-container">
          <div className="info-edit">Edit</div>
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