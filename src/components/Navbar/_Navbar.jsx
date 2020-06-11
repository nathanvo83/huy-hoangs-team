import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import * as ROUTES from "../../constants/routes";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar0 = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const burgerMenuHandle = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  const closeBurgerMenu = () => {
    setShowBurgerMenu(false);
  };

  return (
    <div class="nav-bar">
      <div class="nav-container">
        <div class="brand">
          <a href="https://webdevtrick.com/">123</a>
        </div>
        <nav>
          <div class="nav-mobile">
            <a id="nav-toggle" href="#!">
              <span></span>
            </a>
          </div>
          <ul class="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">Web Development</a>
              <ul class="nav-dropdown">
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#!">Graphic Design</a>
              <ul class="nav-dropdown">
                <li>
                  <a href="#">Photoshop</a>
                </li>
                <li>
                  <a href="#">Illustrator</a>
                </li>
                <li>
                  <a href="#">InDesign</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#!">SEO</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar0;
