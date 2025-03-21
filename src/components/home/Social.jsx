import React from "react";

const Social = () => {
  return (
    <div className="home__social">
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
  );
};

export default Social;
