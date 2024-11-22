import React from 'react'
import { navItems } from '../utils/constants/constants'
import { useSelector } from "react-redux";
import { LIGHT_THEME, DARK_THEME } from "../utils/styles/styles";
import { StoreState } from '../store/appStore';
import { NavigateFunction } from 'react-router-dom';

const NavList = () => {
    
    const themeState = useSelector((store: StoreState) => store.config.theme);
    const theme = themeState === "LIGHT" ? LIGHT_THEME : DARK_THEME;

  return (
    <>
        <ul className='w-10/12 mx-auto'>
            {navItems.map((item)=>(
                <li key={item.name} className={`p-2 ${theme.primaryBg}`}>{item.name}</li>
            ))}
        </ul>
    </>
  )
}

export default NavList