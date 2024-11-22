import React from 'react'
import { LIGHT_THEME, DARK_THEME } from "../utils/styles/styles";
import { useSelector } from "react-redux";
import { StoreState } from "../store/appStore";

const CategoryListItem = () => {
    const themeState = useSelector((store: StoreState) => store.config.theme);
    const theme = themeState === "LIGHT" ? LIGHT_THEME : DARK_THEME;

  return (
    <li className={`p-3 text-lg my-5 ${theme.primaryButton}`}>Item</li>
  )
}

export default CategoryListItem