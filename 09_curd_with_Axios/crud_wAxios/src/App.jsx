import { useState } from "react";
import Search from "./components/Search";
import Post from "./pages/Post";

function App() {
  const [search, setSearch] = useState("");
  // data get form user
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [userData, setUserData] = useState([]);

  //get data from user
  const handleUserData = () => {
    if (title === "" || post === "") return; //prevent empty input
    setUserData((prev) => [...prev, { title: title, body: post }]);
    setTitle("");
    setPost("");
  };
  console.log(userData);

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
            }}
            search={search}
            setSearch={setSearch}
          />
          <Post search={search} />
        </div>
      </main>
    </>
  );
}

export default App;
