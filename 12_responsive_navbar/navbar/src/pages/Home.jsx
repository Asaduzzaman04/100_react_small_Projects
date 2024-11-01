import Hero from "./../components/Hero";
import Navbar from "./../components/Navbar";

const Home = () => {
  return (
    <>
     <div className="overflow-hidden bg-black">
     <header className="w-full text-white bg-[#5C56F7]  px-1 md:px-10 lg:px-14 xl:px-16 py-3 md:py-4">
        <Navbar />
      </header>
      <main className="h-[95vh] ">
        <Hero />
      </main>
     </div>
    </>
  );
};

export default Home;
