import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreState } from "../store/appStore";
import { LIGHT_THEME, DARK_THEME } from "../utils/styles/styles";
import { NavbarPropsInterface } from "../interfaces/miscInterface";
import NavList from "./NavList";


const Navbar = ({ onToggleNav }: NavbarPropsInterface) => {
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
      <NavList onToggleNav={onToggleNav} />
    </div>
  );
};

export default Navbar;
