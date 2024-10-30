import { useEffect, useState } from "react";
import { deleteList, getlist, postData } from "../api/Getlist";

const usePost = () => {
  const [postItem, setPostItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  //get data from api
  const getPostItem = async () => {
    try {
      const response = await getlist();
      setLoading(false);
      setPostItem(response.data);
    } catch (error) {
      setLoading(false);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostItem();
  }, []);

  //delete function
  const handleDelete = async (id) => {
    try {
      const resData = await deleteList(id);
      if (resData.status === 200) {
        const data = postItem.filter((item) => item.id !== id);
        setPostItem(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //add data to api
  const handleAdd = async (addData) =>{
    const response = await postData(addData)
    if(response.status === 201){
      const newItem = [...postItem, response.data]
      setPostItem(newItem)
    }
  }
    


  return [postItem, loading, error, handleDelete,handleAdd];
};

export default usePost;
