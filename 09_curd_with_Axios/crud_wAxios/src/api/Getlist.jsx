import axios from "axios";

const data = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
//get data from api
export const getlist = () => {
  const finalData = data.get("/posts");
  return finalData;
};
//delete data from api
export const deleteList = (id) => {
  return data.delete(`/posts/${id}`);
};
 //post data to api
 export const postData = (data) =>{
  return data.post('/posts',data)
 }

