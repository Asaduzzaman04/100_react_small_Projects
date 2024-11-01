import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// api.get('') function is return Promise  and get the data
export const axiosGet = async () => {
  return api.get("/posts");
};
//get.delete.('') function is return Promise  and delete the data
export const axiosDelete = async (id) => {
  return api.delete(`/posts/${id}`);
};
