import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../store/appStore";
import { LIGHT_THEME, DARK_THEME } from "../utils/styles/styles";

const Footer = () => {
  const themeState = useSelector((store: StoreState) => store.config.theme);
  const theme = themeState === "LIGHT" ? LIGHT_THEME : DARK_THEME;
  return <div className={`w-screen h-36 ${theme.secondaryBg} relative bottom-0`}></div>;
};

export default Footer;
