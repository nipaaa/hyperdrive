import React from "react";
import logo from "../assets/logoMain.png";
import reslogo from "../assets/logoMainRes.png";
import menu from "../assets/hamburgerMenu.png";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img className="d-none d-lg-block" src={logo} alt="Logo" />
            <img
              style={{ width: "140px" }}
              className="d-block d-lg-none"
              src={reslogo}
              alt="Logo"
            />
          </a>
          <div className="responsiveButton">
            <div className="d-block d-lg-none jointBtn rightConer">
              <a href="#">JOIN NOW</a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <!-- <span class="navbar-toggler-icon"></span> --> */}
              <span>
                <img className="img-fluid" src={menu} alt="" />
              </span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="content ms-auto ">
              <ul className="navbar-nav align-items-center">
                <span className="grayLine"></span>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    RESOURCES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FAQS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    IDEAS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"></a>
                </li>
              </ul>
            </div>
            <div className="jointBtn rightConer">
              <span className="darkLine"></span>
              <a href="#">JOIN NOW</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
