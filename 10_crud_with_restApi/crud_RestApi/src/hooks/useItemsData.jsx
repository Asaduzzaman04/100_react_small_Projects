import { useEffect, useState } from "react";
import { axiosDelete, axiosGet } from "../api/authApi";

const useItemsData = () => {
  const [apiData, setApiData] = useState([]);
  const [apiLoading, setApiLoading] = useState(true);
  const [apiError, setApiError] = useState("");
  //data get
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosGet();
        setApiData(response.data);
        setApiLoading(false);
      } catch (err) {
        setApiError(err);
        setApiLoading(false);
      }
    };
    fetchData();
  }, []);
  //data delete
  const handleDelete = async (id) => {
    try {
      const response = await axiosDelete(id);
      if (response.status === 200) {
        const newData = apiData.filter((items) => items.id !== id);
        setApiData(newData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  

  return [apiData, apiLoading, apiError, handleDelete,setApiData];
};

export default useItemsData;
