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
//post.get('') function is return Promise and post the data
export const axiosPost = async (data) => {
  // return api.post(`posts/${data}`); // Incorrect URL Formatting: By using posts/${data}, you are attempting to add the data object directly into the URL path. This will convert data to the string "[object Object]" (or similar), which results in an incorrect URL, leading to the 404 Not Found error.
  return api.post("/posts", data); //   Corrected line
};

//update post 
export const axiosUpdate =  async (UPDATE) =>{
  return api.put("/posts"/ UPDATE)
}