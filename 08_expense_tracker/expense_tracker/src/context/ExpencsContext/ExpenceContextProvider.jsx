import { useState } from "react";
import { ExpenceData } from "./ExpenseContext";


const ExpenceContextProvider = ({children}) => {
const [expenceData, setExpenceData] = useState([]);

    return (
        <ExpenceData.Provider value={{expenceData,setExpenceData}}>
            {children}
        </ExpenceData.Provider>
    );
};

export default ExpenceContextProvider;