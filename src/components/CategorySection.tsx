import React from "react";
import { LIGHT_THEME, DARK_THEME } from "../utils/styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreState } from "../store/appStore";
import CategoryListItem from "./CategoryListItem";
import { CategoryFormValuesInterface } from "../interfaces/authInterface";
import { useForm } from "react-hook-form";
import { addProductCategory } from "../store/productSlice";

const CategorySection = () => {
  const dispatch = useDispatch<AppDispatch>()
  const themeState = useSelector((store: StoreState) => store.config.theme);
  const theme = themeState === "LIGHT" ? LIGHT_THEME : DARK_THEME;
  const formValues = useForm<CategoryFormValuesInterface>();
  const { register, handleSubmit, formState } = formValues;
  const { errors } = formState;

  const submitCategory = (data: any) =>{
    dispatch(addProductCategory({data}))
  }

  return (
    <div className={`h-[40%] w-screen flex justify-around items-center pt-5 ${theme.primaryBg}`}>
      <div className={`w-5/12 h-full border ${theme.border} ${theme.secondaryBg}`} >
      <h1 className={`text-lg font-semibold text-center pt-5`}>Add/edit categories</h1>
        <form noValidate onSubmit={handleSubmit(submitCategory)}>
        <div className="my-3 w-10/12 mx-auto">
              <label className="text-lg">Category Name</label>
              <input
                type="text"
                className={`p-2 my-3 border border-solid cursor-pointer text-lg w-full ${theme.border} ${theme.primaryBg}`}
                placeholder="Category Name"
                {...register("category", {
                  required: {
                    value: true,
                    message: "Please enter category name",
                  }
                })}
              />
              {errors.category && (
                <p className="text-red-700 text-sm">
                  {String(errors.category.message)}
                </p>
              )}
              <button
              className={`py-2 w-full text-lg font-semibold my-2 ${theme.secondaryButton}`}
            >
              Add category
            </button>
            </div>
        </form>
      </div>
      <div className={`w-5/12 h-full border-2 ${theme.border}`}>
        <ul className={`h-full w-full overflow-y-scroll p-5`}>
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />


        </ul>
      </div>
    </div>
  );
};

export default CategorySection;
