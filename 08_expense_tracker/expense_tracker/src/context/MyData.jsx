import { createContext, useContext } from "react";

export const MyData = createContext();

export const useContextData = () => {
  const data = useContext(MyData); //custom hooks for prevent less code  of context
  return data;
};
