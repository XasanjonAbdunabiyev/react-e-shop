import React, { useContext, useEffect, useState } from "react";
import i18next, { changeLanguage } from "i18next";
import "./header.scss";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import logo from "../../../assets/images/logo.svg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useMode } from "../../../zustand/state";
import { Context } from "../../../context/context";
export default function Header() {
  // navigate
  const navigate = useNavigate();
  // theme
  const theme = useMode((state) => state.mode);
  const changeTheme = useMode((state) => state.changeMode);
  // change language function
  function language(e) {
    if (e.target.value === "узбекский") {
      changeLanguage("uz");
    } else if (e.target.value === "русский") {
      changeLanguage("ru");
    } else if (e.target.value === "английский") {
      changeLanguage("en");
    }
  }
  // translation translate function
  const { t } = useTranslation();
  // menu nav toggle
  const [nav, setNav] = useState("links_container");

  const navToggle = () => {
    setNav(!nav);
  };

  // header active
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);
  const { data } = useContext(Context);

  return (
    <div
      style={{ zIndex: "1000" }}
      className={`${
        isActive ? "bg-gray-900 shadow-md" : "shadow-xl bg-white"
      } fixed top-0 w-full  transition p-2`}
    >
      <div className="container">
        <div className="navigation">
          <div
            onClick={() => setNav(!nav)}
            className={nav ? "links_container" : "links_container links_active"}
          >
            <div className="close__bar"></div>
            <ul>
              <div className="hiddenlogo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
              <li
                onClick={() => {
                  setNav(!nav);
                  navigate("/");
                }}
              >
                {i18next.t("home")}
              </li>
              <li
                onClick={() => {
                  navigate("/information");
                }}
              >
                {i18next.t("information")}
              </li>
              <li
                onClick={() => {
                  navigate("/message");
                  setNav(!nav);
                }}
              >
                {i18next.t("message")}
              </li>
              <li
                onClick={() => {
                  setNav(!nav);
                  navigate("/all_product");
                }}
              >
                {i18next.t("product")}
              </li>
            </ul>
          </div>

          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="menu_active">
            <div className="menu_icons" onClick={() => navToggle()}>
              <h1>
                <FaBars />
              </h1>
            </div>

            <div className="shopping_container">
              <div className="menu_icons">
                <h1 onClick={() => navigate("/shop")}>
                  <HiOutlineShoppingCart />
                  <div className="shoping__count">
                    <p>{data.length}</p>
                  </div>
                </h1>
              </div>
            </div>

            <div className="mode_container">
              {theme === "light" ? (
                <div className="menu_icons">
                  <h1>
                    <FaMoon onClick={() => changeTheme()} />
                  </h1>
                </div>
              ) : (
                <div className="menu_icons">
                  <h1>
                    <FaSun onClick={() => changeTheme()} />
                  </h1>
                </div>
              )}
            </div>

            <div className="lang-container">
              <select onClick={(e) => language(e)}>
                <option className="bg-white text-[16px] cursor-pointer px-4 py-1 capitalize font-bold">
                  узбекский
                </option>
                <option className="bg-white text-[16px] cursor-pointer px-4 py-1 capitalize font-bold">
                  русский
                </option>
                <option className="bg-white text-[16px] cursor-pointer px-4 py-1 capitalize font-bold">
                  английский
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
