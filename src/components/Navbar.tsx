import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../store/appStore";
import { LIGHT_THEME, DARK_THEME } from "../utils/styles/styles";
import { NavbarPropsInterface } from "../interfaces/miscInterface";
import NavList from "./NavList";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onToggleNav }: NavbarPropsInterface) => {
    const navigate = useNavigate()
  const themeState = useSelector((store: StoreState) => store.config.theme);
  const theme = themeState === "LIGHT" ? LIGHT_THEME : DARK_THEME;


  return (
    <div className={`z-20 h-screen fixed w-3/12 shadow-2xl border-2 ${theme.primaryBg} ${theme.border}`}>
      <button
        type="button"
        onClick={onToggleNav}
        className={`p-2 m-5  ${theme.primaryButton}`}
      >
        Close
      </button>
      <NavList  />
    </div>
  );
};

export default Navbar;
