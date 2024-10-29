import Search from "./components/Search";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <main className="w-full h-full  overflow-hidden ">
        <div>
          <Search />
          <Post />
        </div>
      </main>
    </>
  );
}

export default App;
