import axios from "axios";

const data = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getlist = () => {
  const finalData = data.get("/posts");
  return finalData;
};

export const deleteList = (id) => {
  return data.delete(`/posts/${id}`);
};
