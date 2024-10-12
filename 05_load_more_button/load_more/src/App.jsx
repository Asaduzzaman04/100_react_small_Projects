import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import Navbar from "./Navbar";

function App() {
  const [porductsAll, setProductsAll] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const porductsApi = "https://dummyjson.com/products?limit=100";
  useEffect(() => {
    const getProducts = async (getProductsData) => {
      try {
        setLoading(true);
        const response = await fetch(getProductsData);
        if (!response.ok) {
          throw new Error("opps data not found");
        }
        const result = await response.json();
        setProductsAll(result);
      } catch (error) {
        setError(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getProducts(porductsApi);
  }, []);

  if (loading) {
    return (
      <>
        <main className="h-[100vh] w-full flex justify-center items-center">
          <div className="flex flex-row gap-2 ">
            <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <main className="h-[100vh] w-full flex justify-center items-center">
          <div className="relative w-full max-w-64 flex flex-wrap items-center justify-center py-3 pl-4 pr-14 rounded-lg text-base font-medium [transition:all_0.5s_ease] border-solid border border-[#f85149] text-[#b22b2b] [&amp;_svg]:text-[#b22b2b] group bg-[linear-gradient(#f851491a,#f851491a)]">
            <button
              type="button"
              aria-label="close-error"
              className="absolute right-4 p-1 rounded-md transition-opacity text-[#f85149] border border-[#f85149] opacity-40 hover:opacity-100"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="16"
                width="16"
                className="sizer [--sz:16px] h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
            <p className="flex flex-row items-center mr-auto gap-x-2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="28"
                width="28"
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
              something error 
            </p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main className="flex flex-col w-full justify-center items-center">
        <Navbar/>
        <div className="container flex justify-center items-center w-full ">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-around  items-center">
          {
            porductsAll.products.map((cards,idx) => <ProductsCard key={idx} items={cards}/>)
          }
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
