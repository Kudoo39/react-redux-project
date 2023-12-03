import React from "react";
import "./Footer.css";

const Footer = ({ isOpenPost, setOpenPost }) => {
  return (
    <footer>
      <div className="footer-title" onClick={() => setOpenPost(!isOpenPost)}>
        {!isOpenPost && "+"}
        {isOpenPost && "-"}
      </div>
    </footer>
  );
};

export default Footer;
