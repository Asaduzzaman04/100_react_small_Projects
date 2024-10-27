import { createContext, useContext } from "react";

export const ExpenceData = createContext()

 export const useExpenceData = () => {
    const data = useContext(ExpenceData)
    return data
}