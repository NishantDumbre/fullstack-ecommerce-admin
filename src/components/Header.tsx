import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../store/configSlice";
import { AppDispatch, StoreState } from "../store/appStore";
import { LIGHT_THEME, DARK_THEME } from "../utils/styles/styles";
import Navbar from "./Navbar";
import Modal from "./Modal";
import { fetchProductAndCategory } from "../store/productSlice";


const Header = () => {
  const themeState = useSelector((store: StoreState) => store.config.theme);
  const isLoggedIn = useSelector((store: StoreState) => store.admin.email);
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((store:StoreState)=>store.product.categories)
  const [isShowNav, setIsShowNav] = useState<boolean>(false);

  const theme = themeState === "LIGHT" ? LIGHT_THEME : DARK_THEME;
  const toggleTheme = () => {
    const newTheme = themeState === "LIGHT" ? "DARK" : "LIGHT";
    dispatch(changeTheme(newTheme));
  };

  const toggleNavbar = () => {
    setIsShowNav((prev) => !prev);
  };


  useEffect(() => {
    if(isLoggedIn){
      dispatch(fetchProductAndCategory());
    }
  }, [isLoggedIn]);
  

  return (
    <>
      {isShowNav && (
        <Modal onClick={toggleNavbar}>
          <Navbar onToggleNav={toggleNavbar} />
        </Modal>
      )}
      <div
        className={`w-screen h-16 flex justify-between items-center ${theme.secondaryBg}`}
      >
        <div className="h-full flex justify-center items-center">
          {isLoggedIn && (
            <button
              type="button"
              onClick={toggleNavbar}
              className={`p-2 mx-5 ${theme.secondaryButton}`}
            >
              Toggle Navbar
            </button>
          )}
          {/* <span className="h-full mx-5" onClick={toggleNavbar}>
          <FaAlignCenter />
        </span> */}
          <img src={theme.logo} className="h-full mx-2" />
        </div>
        <div>
          <p></p>
          <button
            type="button"
            onClick={toggleTheme}
            className={`p-2 mx-5 ${theme.secondaryButton}`}
          >
            Change Theme
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
