import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <span className="footer__note">
          &#169; 2025 Jason Thung. All rights reserved <br /> Deployed with
          <a href="https://github.com/" target="_blank" className="techLink">
            {" "}
            Github
          </a>
          , built using
          <a href="https://react.dev/" target="_blank" className="techLink">
            {" "}
            React.js
          </a>
          , and coded in
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            className="techLink"
          >
            {" "}
            Visual Studio Code
          </a>{" "}
          by yours truly.
        </span>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/jsn_thung/"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-instagram-alt"></i>
          </a>

          <a
            href="https://github.com/jsnthung"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/jason-thung/"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
