import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./views/Main";
import Footer from "./components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="app-icon-bar">
        <div className="app-phone-outter">
          <a href="tel:097 137 2222" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="app-phone"
            ></FontAwesomeIcon>
          </a>
        </div>

        {/* <a href="#" className="facebook">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#" className="twitter">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#" className="google">
          <i className="fa fa-google"></i>
        </a>
        <a href="#" className="linkedin">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#" className="youtube">
          <i className="fa fa-youtube"></i>
        </a> */}
      </div>

      <Navbar></Navbar>
      <div className="main-content">
        <Main></Main>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
