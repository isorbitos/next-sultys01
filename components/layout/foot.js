import React from "react";

const Foot = () => (
  <footer className="footer py-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 text-lg-left">
          Copyright © naturaliossultys.lt{" "}
        </div>
        <div className="col-lg-4 my-3 my-lg-0">
          {/* <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a> */}
          <a
            className="btn btn-dark btn-social mx-2"
            href="https://www.facebook.com/sulciufabrikelis"
            target="_blank"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          {/* <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a> */}
          <a
            className="btn btn-dark btn-social mx-2"
            href="https://www.instagram.com/zavinta_naturaliossultys/"
            target="_blank"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        {/* <div className="col-lg-4 text-lg-right">
                        <a className="mr-3" href="#!">Privacy Policy</a>
                        <a href="#!">Terms of Use</a>
                    </div> */}
      </div>
    </div>
  </footer>
);

export default Foot;
