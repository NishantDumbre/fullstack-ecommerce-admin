import { NavigateFunction } from "react-router-dom";
import { ToggleFormType } from "../../interfaces/authInterface";
import toast from "react-hot-toast";


// export const submitLoginForm = async (
//   toggleForm: ToggleFormType,
//   data: any,
//   pageType: string,
//   navigate: NavigateFunction
// ) => {
//   try {

//     if (pageType === "LOGIN") {
//       toast("Logging in");
//       navigate("/", { replace: true });
//     } else if (pageType === "SIGNUP") {
//       toast("Signed up successfully");
//       toggleForm("LOGIN");
//     }
//   } catch (error: any) {
//     toast(error.response?.data?.message);
//     console.log(error);
//   }
// };
