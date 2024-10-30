import { useState } from "react";
import Search from "./components/Search";
import Post from "./pages/Post";

function App() {
  const [search, setSearch] = useState('');
 
  return (
    <>
      <main className="w-full h-full  overflow-hidden ">
        <div>
          <Search search={search} setSearch={setSearch} />
          <Post search={search}/>
        </div>
      </main>
    </>
  );
}

export default App;
