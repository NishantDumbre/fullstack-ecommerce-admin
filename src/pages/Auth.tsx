import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormValuesInterface } from "../interfaces/authInterface";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../store/appStore";
import { LIGHT_THEME, DARK_THEME } from "../utils/styles/styles";
// import { submitLoginForm } from "../utils/functions/authFunctions";
import { useNavigate } from "react-router-dom";
import { submitLoginForm } from "../store/adminSlice";
import toast from "react-hot-toast";

const Auth = () => {
  const [pageType, setPageType] = useState("SIGNUP");
  const themeState = useSelector((store: StoreState) => store.config.theme);
  const formValues = useForm<FormValuesInterface>();
  const theme = themeState === "LIGHT" ? LIGHT_THEME : DARK_THEME;

  const { register, handleSubmit, formState, watch } = formValues;
  const { errors } = formState;
  const password = watch("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { loading, error } = useSelector((state: StoreState) => state.admin);

  const toggleFormType = (type: string) => {
    formValues.reset();
    setPageType(type);
  };

  const onSubmit = async (data: any) => {
    try {
      const submitDispatch = await dispatch(
        submitLoginForm({ data, pageType }) as any
      ).unwrap(); 
      if (pageType === "LOGIN") navigate("/", { replace: true });
      if (pageType === "SIGNUP") {
        toast("Signed up successfully");
        toggleFormType("LOGIN");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className={`h-screen w-screen ${theme.primaryBg}`}>
      <div className="w-9/12 mx-auto pt-20">
        <h1 className="font-semibold text-5xl">ADMIN PORTAL</h1>
        <div className="w-full lg:w-6/12 p-4 mx-auto">
          <h3
            className={`text-center text-2xl font-semibold border-b-2 p-5 mb-5 ${theme.border}`}
          >
            {pageType === "SIGNUP" ? "Signup" : "Login"}
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="my-3">
              <label className="text-lg">Email</label>
              <input
                type="email"
                className={`p-2 border border-solid cursor-pointer text-lg w-full ${theme.border} ${theme.primaryBg}`}
                placeholder="Enter email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please enter email",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-700 text-sm mb-2">
                  {String(errors.email.message)}
                </p>
              )}
            </div>
            <div className="my-3">
              <label className="text-lg">Password</label>
              <input
                type="password"
                className={`p-2 border border-solid cursor-pointer text-lg w-full ${theme.border} ${theme.primaryBg}`}
                placeholder="Enter password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please enter password",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be atleast 6 chars long",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-700 text-sm mb-2">
                  {String(errors.password.message)}
                </p>
              )}
            </div>
            {pageType === "SIGNUP" && (
              <div className="my-3">
                <label className="text-lg">Confirm Password</label>
                <input
                  type="password"
                  className={`p-2 border border-solid cursor-pointer text-lg w-full ${theme.border} ${theme.primaryBg}`}
                  placeholder="Confirm password"
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "Please confirm password",
                    },
                    validate: (value) =>
                      value === password || "The passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-700 text-sm mb-2">
                    {String(errors.confirmPassword.message)}
                  </p>
                )}
              </div>
            )}
            <div className="my-3">
              <label className="text-lg">Secret Key</label>
              <input
                type="password"
                className={`p-2 border border-solid cursor-pointer text-lg w-full ${theme.border} ${theme.primaryBg}`}
                placeholder="Enter secret key"
                {...register("secretKey", {
                  required: {
                    value: true,
                    message: "Please enter secret key",
                  },
                })}
              />
              {errors.secretKey && (
                <p className="text-red-700 text-sm mb-2">
                  {String(errors.secretKey.message)}
                </p>
              )}
            </div>
            <button
              className={`py-2 w-full text-lg font-semibold my-3 ${theme.primaryButton}`}
            >
              {pageType === "SIGNUP" ? "Create Account" : "Login"}
            </button>
            {pageType === "SIGNUP" && (
              <p
                onClick={() => toggleFormType("LOGIN")}
                className={`text-lg hover:underline py-2 ${theme.text} `}
              >
                Have an account? Login
              </p>
            )}
            {pageType === "LOGIN" && (
              <p
                onClick={() => toggleFormType("SIGNUP")}
                className={`text-lg hover:underline py-2 ${theme.text} `}
              >
                Don't have an acount? Create account
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
