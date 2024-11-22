import React from "react";
import { LIGHT_THEME, DARK_THEME } from "../utils/styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreState } from "../store/appStore";
import CategoryListItem from "./CategoryListItem";
import { ProductFormValuesInterface } from "../interfaces/authInterface";
import { useForm } from "react-hook-form";
import { addProductCategory } from "../store/productSlice";

const ProductFormSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(
    (store: StoreState) => store.product.categories
  );
  const themeState = useSelector((store: StoreState) => store.config.theme);
  const theme = themeState === "LIGHT" ? LIGHT_THEME : DARK_THEME;
  const formValues = useForm<ProductFormValuesInterface>();
  const { register, handleSubmit, formState } = formValues;
  const { errors } = formState;

  const submitProduct = (data: any) => {
    console.log(data)
  };

  return (
    <div
      className={`w-screen flex justify-around items-center my-20 py-10 ${theme.primaryBg} bg-purple-500`}
    >
      <div
        className={`w-10/12 h-full py-10 border ${theme.border} ${theme.secondaryBg}`}
      >
        <h1 className={`text-2xl font-semibold text-center pt-5`}>
          Add Products
        </h1>
        <form noValidate onSubmit={handleSubmit(submitProduct)}>
          <div className="my-3 w-10/12 mx-auto">
            <label className="text-lg">Name</label>
            <input
              type="text"
              className={`p-2 my-3 border border-solid cursor-pointer text-lg w-full ${theme.border} ${theme.primaryBg}`}
              placeholder="Product Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Please enter product name",
                },
              })}
            />
            {errors.category && (
              <p className="text-red-700 text-sm">
                {String(errors.category.message)}
              </p>
            )}
          </div>
          <div className="my-3 w-10/12 mx-auto">
            <label className="text-lg">Price</label>
            <input
              type="number"
              className={`p-2 my-3 border border-solid cursor-pointer text-lg w-full ${theme.border} ${theme.primaryBg}`}
              placeholder="Product Price"
              {...register("price", {
                required: {
                  value: true,
                  message: "Please enter price",
                },
              })}
            />
            {errors.category && (
              <p className="text-red-700 text-sm">
                {String(errors.category.message)}
              </p>
            )}
          </div>
          <div className="my-3 w-10/12 mx-auto">
            <label className="text-lg">Description</label>
            <input
              type="text"
              className={`p-2 my-3 border border-solid cursor-pointer text-lg w-full ${theme.border} ${theme.primaryBg}`}
              placeholder="Product Description"
              {...register("description", {
                required: {
                  value: true,
                  message: "Please enter description",
                },
              })}
            />
            {errors.category && (
              <p className="text-red-700 text-sm">
                {String(errors.category.message)}
              </p>
            )}
          </div>
          <div className="my-3 w-10/12 mx-auto">
            <label className="text-lg">Images</label>
            <input
              type="text"
              className={`p-2 my-3 border border-solid cursor-pointer text-lg w-full ${theme.border} ${theme.primaryBg}`}
              placeholder="Enter image URLs separated by a single space"
              {...register("images", {
                required: {
                  value: true,
                  message: "Please enter image URLs separated by a single space",
                },
              })}
            />
            {errors.category && (
              <p className="text-red-700 text-sm">
                {String(errors.category.message)}
              </p>
            )}
          </div>
          <div className="my-3 w-10/12 mx-auto">
            <label className="text-lg">Select Category</label>
            <select
              className={`p-2 my-3 border border-solid cursor-pointer text-lg w-full ${theme.border} ${theme.primaryBg}`}
              {...register("category", {
                required: {
                  value: true,
                  message: "Please enter category name",
                },
              })}
            >
              {categories.map((item)=>(
                <option value={item.category}>{item.category}</option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-700 text-sm">
                {String(errors.category.message)}
              </p>
            )}
          </div>
          <button
            className={`py-2 w-8/12 mx-auto block text-lg font-semibold my-2 ${theme.secondaryButton}`}
            type="submit"
          >
            Add product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductFormSection;
