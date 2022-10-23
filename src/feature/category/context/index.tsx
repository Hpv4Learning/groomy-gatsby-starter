import { createContext, useContext } from "react";

const initialValue = {
  slug: "",
  numOfPages: 0,
  currentPage: 1,
};

type CategoryProvider = {
  slug: string;
  numOfPages: number;
  currentPage: number;
};

const CategoryContext = createContext<CategoryProvider>(initialValue);

export const CategoryProvider = CategoryContext.Provider;

export const useCategoryContext = () => useContext(CategoryContext);
