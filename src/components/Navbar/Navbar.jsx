import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import * as ROUTES from "../../constants/routes.js";
import logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let currentPage = window.location.pathname;
  const history = useHistory();
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const burgerMenuHandle = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  const closeBurgerMenu = () => {
    setShowBurgerMenu(false);
  };

  const gotoHomePage = () => {
    history.push(ROUTES.HOME);
  };

  return (
    <div className="outbound-m">
      <div className="outbound">
        <div
          className={showBurgerMenu ? "topnav responsive" : "topnav"}
          id="myTopnav"
        >
          <div className="dropdown">
            <div className="branch">
              <img
                src={logo}
                alt=""
                className="n-logo"
                onClick={gotoHomePage}
              ></img>
            </div>
          </div>

          <a
            href={ROUTES.HOME}
            rel="noopener noreferrer"
            onClick={closeBurgerMenu}
          >
            TRANG CHỦ
          </a>

          <div className="dropdown">
            <button className="dropbtn">
              MÀNH&nbsp;
              <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </button>
            <div className="dropdown-content">
              <a
                href={ROUTES.BLINDS_ROLLER}
                rel="noopener noreferrer"
                className={currentPage === ROUTES.BLINDS_ROLLER ? "active" : ""}
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; MÀNH CUỐN
              </a>
              <a
                href={ROUTES.MOTORISED_ROLLER}
                rel="noopener noreferrer"
                className={
                  currentPage === ROUTES.MOTORISED_ROLLER ? "active" : ""
                }
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; MÀNH CUỐN CÓ ĐỘNG CƠ
              </a>
              <a
                href={ROUTES.BLINDS_VENETIAN}
                rel="noopener noreferrer"
                className={
                  currentPage === ROUTES.BLINDS_VENETIAN ? "active" : ""
                }
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; MÀNH SÁO NGANG
              </a>
              <a
                href={ROUTES.BLINDS_VERTICAL}
                rel="noopener noreferrer"
                className={
                  currentPage === ROUTES.BLINDS_VERTICAL ? "active" : ""
                }
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; MÀNH LÁ DỌC
              </a>
              <a
                href={ROUTES.BLINDS_ZEBRA}
                rel="noopener noreferrer"
                className={currentPage === ROUTES.BLINDS_ZEBRA ? "active" : ""}
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; MÀNH CẦU VỒNG
              </a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              MÀN CỬA&nbsp;
              <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </button>
            <div className="dropdown-content">
              <a
                href={ROUTES.CURTAIN_DAY}
                rel="noopener noreferrer"
                className={currentPage === ROUTES.CURTAIN_DAY ? "active" : ""}
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; MÀN VOAN
              </a>
              <a
                href={ROUTES.CURTAIN_NIGHT}
                rel="noopener noreferrer"
                className={currentPage === ROUTES.CURTAIN_NIGHT ? "active" : ""}
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; MÀN CHỐNG NẮNG VÀ NÓNG
              </a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              CỬA CHỚP&nbsp;
              <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </button>
            <div className="dropdown-content">
              <a
                href={ROUTES.SHUTTER_TIMBER}
                rel="noopener noreferrer"
                className={
                  currentPage === ROUTES.SHUTTER_TIMBER ? "active" : ""
                }
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; CỬA CHỚP GỖ
              </a>
              <a
                href={ROUTES.SHUTTER_PVC}
                rel="noopener noreferrer"
                className={currentPage === ROUTES.SHUTTER_PVC ? "active" : ""}
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; CỬA CHỚP NHỰA PVC
              </a>
            </div>
          </div>
          <a
            href={ROUTES.PROJECTS}
            rel="noopener noreferrer"
            className={currentPage === ROUTES.PROJECTS ? "active" : ""}
            onClick={closeBurgerMenu}
          >
            DỰ ÁN
          </a>

          <div className="dropdown">
            <button className="dropbtn">
              Hướng dẫn&nbsp;
              <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </button>
            <div className="dropdown-content">
              <a
                href={ROUTES.BUYINGGUIDE_BLINDS}
                rel="noopener noreferrer"
                className={
                  currentPage === ROUTES.BUYINGGUIDE_BLINDS ? "active" : ""
                }
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; Mành Cuốn
              </a>
              <a
                href={ROUTES.BUYINGGUIDE_CURTAINS}
                rel="noopener noreferrer"
                className={
                  currentPage === ROUTES.BUYINGGUIDE_CURTAINS ? "active" : ""
                }
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; MÀN CỬA
              </a>
              <a
                href={ROUTES.BUYINGGUIDE_SHUTTERS}
                rel="noopener noreferrer"
                className={
                  currentPage === ROUTES.BUYINGGUIDE_SHUTTERS ? "active" : ""
                }
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; CỬA CHỚP
              </a>
            </div>
          </div>

          <a
            href={ROUTES.SUSTAINABILITY}
            rel="noopener noreferrer"
            className={currentPage === ROUTES.SUSTAINABILITY ? "active" : ""}
            onClick={closeBurgerMenu}
          >
            SỰ BỀN VỮNG
          </a>

          {/* <a
            href={ROUTES.HOUZZ_PROJECTS}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeBurgerMenu}
          >
            Projects
          </a>
          <a
            href={ROUTES.HOUZZ_REVIEWS}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeBurgerMenu}
          >
            Reviews
          </a> */}

          <a
            href={ROUTES.SHOWROOM}
            rel="noopener noreferrer"
            className={currentPage === ROUTES.SHOWROOM ? "active" : ""}
            onClick={closeBurgerMenu}
          >
            CỬA HÀNG TRƯNG BÀY
          </a>

          <a
            href={ROUTES.CONTACTUS}
            rel="noopener noreferrer"
            className={currentPage === ROUTES.CONTACTUS ? "active" : ""}
            onClick={closeBurgerMenu}
          >
            LIÊN HỆ
          </a>

          <a
            href="#0"
            rel="noopener noreferrer"
            className="icon"
            onClick={burgerMenuHandle}
          >
            &#9776;
          </a>
          {/* <a
          // href="javascript:void(0);"
          // style="font-size:15px;"
          class="icon"
          onclick={smallHandler}
        >
          &#9776;
        </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
