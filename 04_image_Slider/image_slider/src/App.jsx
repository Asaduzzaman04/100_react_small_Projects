import { useEffect, useState } from "react";
import Images from "./Images";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

function App() {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [slide, setSlide] = useState(0);

  let api = "https://picsum.photos/v2/list?page=1&limit=5";

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("!Opps data not found");
        }
        const result = await response.json();
        setImage(result);
      } catch (err) {
        setError(err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center w-full bg-white h-[100vh] ">
          <button
            disabled=""
            className="bg-gradient-to-r from-blue-900 to-purple-900 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center transition duration-300 transform animate-ping"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-spin h-10 w-10 mr-3 text-white"
            >
              <circle
                strokeWidth="4"
                stroke="currentColor"
                r="10"
                cy="12"
                cx="12"
                className="opacity-25"
              ></circle>
              <path
                d="M4 12a8 8 0 018-8v8H4z"
                fill="currentColor"
                className="opacity-75"
              ></path>
            </svg>
            Loading...
          </button>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="flex justify-center items-center mx-auto w-fit h-[100vh]">
          <div role="alert" className="alert alert-error ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current "
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Task failed .</span>
          </div>
        </div>
      </>
    );
  }

  const handleLeftArrow = () => {
    const prevSlide = slide === 0 ? image.length - 1 : slide - 1;
    setSlide(prevSlide)
  };
  const handleRightArrow = () => {
    const nextSlide = slide === image.length - 1 ? 0 : slide + 1
    setSlide(nextSlide)
  };

  return (
    <>
      <main className="w-full  h-[100vh] text-black bg-white flex gap-4 flex-col px-10  justify-center items-center ">
        <div className="relative w-[50%] border-2 flex justify-center items-center  ">
          <div className="overflow-hidden rounded-2xl gap-3  flex object-cover min-w-full h-auto ">
            {image.map((image, index) => (
              <Images value={image} key={index} slide={slide}  index={index} />
            ))}
          </div>
          <div className="arrow-navigation">
            <FaArrowCircleLeft
              onClick={handleLeftArrow}
              className="absolute left-2 text-7xl cursor-pointer text-white active:scale-95 transition-all duration-200 ease-linear"
            />
            <FaArrowCircleRight
              onClick={handleRightArrow}
              className="text-7xl cursor-pointer absolute right-2 text-white active:scale-95 transition-all duration-200 ease-linear"
            />
          </div>
        </div>
        <span className="flex  justify-center items-center gap-2 ">
          {image.map((_, i) => {
            i += 1;
            return (
              <button
                onClick={handleRightArrow}
                className="border px-4 py-2 rounded-full font-bold hover:bg-slate-200"
                key={i}
              >
                {i}
              </button>
            );
          })}
        </span>
      </main>
    </>
  );
}

export default App;
