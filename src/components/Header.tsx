import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../store/configSlice";
import { StoreState } from "../store/appStore";
import { LIGHT_THEME, DARK_THEME } from "../utils/styles/styles";

const Header = () => {
  const themeState = useSelector((store: StoreState) => store.config.theme);
  const dispatch = useDispatch();
  const theme = themeState === "LIGHT" ? LIGHT_THEME : DARK_THEME;
  const toggleTheme = () => {
    const newTheme = themeState === "LIGHT" ? "DARK" : "LIGHT";
    dispatch(changeTheme(newTheme));
  };

  return (
    <div className={`w-screen h-16 flex justify-between items-center ${theme.secondaryBg}`}>
      <img src={theme.logo} className="h-full mx-5" />
      <button
        type="button"
        onClick={toggleTheme}
        className={`p-2 mx-5 ${theme.secondaryButton}`}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Header;
