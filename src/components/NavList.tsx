import React from "react";
import { navItems } from "../utils/constants/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { LIGHT_THEME, DARK_THEME } from "../utils/styles/styles";
import { StoreState } from "../store/appStore";
import { BASE_URL, LOGOUT_URL } from "../utils/constants/api";
import { logoutAdmin } from "../store/adminSlice";
import { NavbarPropsInterface } from "../interfaces/miscInterface";

const NavList = ({ onToggleNav }: NavbarPropsInterface) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const themeState = useSelector((store: StoreState) => store.config.theme);
  const theme = themeState === "LIGHT" ? LIGHT_THEME : DARK_THEME;

  const logoutHandler = async () => {
    Cookies.remove("auth_token", { path: "/" });
    try {
      const response = await BASE_URL.get(LOGOUT_URL, { withCredentials: true });
      console.log(response.data?.message);
      onToggleNav()
      dispatch(logoutAdmin());
    } catch (error: any) {
      console.log(error);
    }
  };

  const navigateHandler = (path:string) =>{
    onToggleNav()
    navigate(path)
  }

  return (
    <>
      <ul className="w-9/12 mx-auto">
        {navItems.map((item) => (
          <li
            key={item.name}
            onClick={() => navigateHandler(item.path)}
            className={`p-3 text-lg my-5 ${theme.primaryButton}`}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div className="w-9/12 mx-auto">
        <p
          onClick={logoutHandler}
          className={`p-3 text-lg my-5 ${theme.primaryButton}`}
        >
          Logout
        </p>
      </div>
    </>
  );
};

export default NavList;
