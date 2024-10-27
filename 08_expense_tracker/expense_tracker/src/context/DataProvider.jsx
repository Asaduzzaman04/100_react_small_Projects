import { useState } from "react";
import { MyData } from "./MyData";

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState("");
  return (
    <MyData.Provider value={{ user, setUser }}>{children}</MyData.Provider>
  );
};
