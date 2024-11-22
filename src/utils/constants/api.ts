import axios from "axios";

export const BASE_URL = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

export const SIGNUP_URL = "/admin/account/signup";
export const LOGIN_URL = "/admin/account/login";
export const LOGOUT_URL = "/admin/account/logout"

export const ADD_CATEGORY_URL = '/admin/products/add-cateogry'
export const REMOVE_CATEGORY_URL = '/admin/products/remove-cateogry'
export const FETCH_PRODUCT_AND_CATEOGRY_URL = '/admin/products/fetch-products-and-categories'

export const ADD_PRODUCT_URL = '/admin/products/add-product'
