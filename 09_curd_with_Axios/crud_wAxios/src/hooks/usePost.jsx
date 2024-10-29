import { useEffect, useState } from "react";
import { getlist } from "../api/Getlist";

const usePost = () => {
  const [postItem, setPostItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

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
  return [postItem, loading, error];
};

export default usePost;
