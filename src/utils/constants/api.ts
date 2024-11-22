import axios from "axios";

export const BASE_URL = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

export const SIGNUP_URL = "/admin/account/signup";
export const LOGIN_URL = "/admin/account/login";

