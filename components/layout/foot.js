import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebookF, faInstagram} from "@fortawesome/free-brands-svg-icons"

const Foot = () => (
  <footer className="footer py-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 text-lg-left">
          Copyright © naturaliossultys.lt{" "}
        </div>
        <div className="col-lg-4 my-3 my-lg-0">
          <a
            className="btn btn-dark btn-social mx-2"
            href="https://www.facebook.com/sulciufabrikelis"
            target="_blank"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            className="btn btn-dark btn-social mx-2"
            href="https://www.instagram.com/zavinta_naturaliossultys/"
            target="_blank"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Foot;
