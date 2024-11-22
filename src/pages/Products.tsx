import React from "react";
import { LIGHT_THEME, DARK_THEME } from "../utils/styles/styles";
import { useSelector } from "react-redux";
import { StoreState } from "../store/appStore";
import CategorySection from "../components/CategorySection";
import ProductDisplaySection from "../components/ProductDisplaySection";
import ProductFormSection from "../components/ProductFormSection";


const Products = () => {
  const themeState = useSelector((store: StoreState) => store.config.theme);
  const theme = themeState === "LIGHT" ? LIGHT_THEME : DARK_THEME;
  return (
    <div className={`w-screen ${theme.primaryBg}`}>
      <CategorySection />
      <ProductDisplaySection />
      <ProductFormSection />
    </div>
  );
};

export default Products;
