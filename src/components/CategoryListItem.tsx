import React from "react";
import { LIGHT_THEME, DARK_THEME } from "../utils/styles/styles";
import { useSelector } from "react-redux";
import { StoreState } from "../store/appStore";

const CategoryListItem = (props: any) => {
  const themeState = useSelector((store: StoreState) => store.config.theme);
  const theme = themeState === "LIGHT" ? LIGHT_THEME : DARK_THEME;
  const { id, category, totalProducts } = props.props;

  return (
    <li
      className={`p-3 text-lg my-5 flex justify-between items-center ${theme.primaryButton}`}
    >
      <p>{category}</p>
      <div className="flex justify-center items-center">
        <p> Q:{totalProducts}</p>
        <button className={`px-2 mx-3 ${theme.secondaryButton}`}>X</button>
      </div>
    </li>
  );
};

export default CategoryListItem;
