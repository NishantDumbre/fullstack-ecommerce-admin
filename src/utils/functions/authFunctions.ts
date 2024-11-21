import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { ToggleFormType } from "../../interfaces/authInterface";
import toast from "react-hot-toast";

const BASE_URL = axios.create({
  baseURL: "https://localhost:8080",
  withCredentials:true
});

const SIGNUP_URL = '/account/signup'

export const submitLoginForm = async (toggleForm: ToggleFormType, data:any) => {
  try {
    console.log(data)
    const response = await BASE_URL.post(BASE_URL + SIGNUP_URL, data)
    console.log('Signed up successfully')
    toast('Signed up successfully',
      {
        style: {
          background: '#000',
          color: '#fff',
          border:'#fff'
        },
      }
    );

    toggleForm('LOGIN')
  } catch (error: any) {
    toast(error.message,
      {
        style: {
          background: '#fff',
          color: '#000',
          border:'#000'
        },
      }
    );
    console.log(error.message)
  }
};

