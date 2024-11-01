import { useCallback, useState } from "react";
import Search from "./components/Search";
import Post from "./pages/Post";

function App() {
  const [search, setSearch] = useState("");
  // data get form user
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [userData, setUserData] = useState([]);
  const [updateData, setUpdateData] = useState({});

  //get data from user
  
  const handleUserData = () => {
    if (title === "" || post === "") return; //prevent empty input
    setUserData((prev) => [...prev, { title: title, body: post }]);
    setTitle("");
    setPost("");
  };
  const toggle = Object.keys(updateData).length === 0;

  const handleUpdateData = useCallback((updateData) => {
    setUpdateData(updateData);
    setTitle(updateData.title);
    setPost(updateData.body);
  },[]);


  return (
    <>
      <main className="w-full h-full  overflow-hidden ">
        <div>
          <Search
            userposts={{
              title,
              post,
              setTitle,
              setPost,
              handleUserData,
              userData,
              toggle,
            }}
            search={search}
            setSearch={setSearch}
          />
          <Post handleUpdateData={handleUpdateData} search={search} />
        </div>
      </main>
    </>
  );
}

export default App;
