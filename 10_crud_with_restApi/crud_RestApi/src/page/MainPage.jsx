import { useCallback, useState } from "react";
import Form from "./../components/Form/Form";
import Home from "./Home";
import useItemsData from "../hooks/useItemsData";

const MainPage = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({
    title: "",
    body: "",
    id: undefined,
  });
  const [apiData, apiLoading, apiError, handleDelete, setApiData] =
    useItemsData();

  //handle edit values
  const handleEdit = useCallback((item) => {
    setData({ id: item.id, body: item.body, title: item.title });
  }, []);
  
  console.log(data);

  return (
    <>
      <div className="flex  flex-col justify-center items-center">
        <header className="py-3 w-full md:w-auto">
          <Form
            value={{
              data,
              setData,
              handleEdit,
              search,
              setSearch,
              setApiData,
              apiData,
            }}
          />
        </header>
        <main className="w-full flex justify-center items-center">
          <Home
            searchValue={search}
            value={{ handleEdit, apiData, apiLoading, apiError, handleDelete }}
          />
        </main>
      </div>
    </>
  );
};

export default MainPage;
