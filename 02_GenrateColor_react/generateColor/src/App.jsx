import { useState } from "react";

function App() {
  const [color, setcolor] = useState("hex");
  const valueColor = (element) => {
    const color = Math.floor(Math.random() * element);
    return color;
  };

  const handleHexColor = () => {
    const colorCode = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexSing = "#";
    for (let i = 0; i < 6; i++) {
      hexSing += colorCode[valueColor(colorCode.length)];
    }
    setcolor(hexSing);
  };

  // const handleRGBColor = () => {
  //   const r = valueColor(255)
  //   const g = valueColor(255)
  //   const b = valueColor(255)
  //   setcolor(`${r}${g}${b}`)
  // }

  return (
    <>
      <main
        style={{ background: color }}
        className={`bg-black  w-full h-[100vh] text-white flex flex-col justify-center items-center transition-all duration-200 ease-linear `}
      >
        {/* button-section */}
        <section className="buttons  w-fit mx-auto flex justify-center items-center gap-10 px-5 py-10 font-semibold text-xl ">
          <button
            className={` px-3 py-1.5 rounded-md bg-lime-800 text-white active:scale-95 transition-all duration-300 ease-linear capitalize `}
            onClick={handleHexColor}
          >
            hex Color
          </button>

          {/* <button
            className={` px-3 py-1.5 rounded-md bg-lime-800 text-white active:scale-95 transition-all duration-300 ease-linear capitalize `}
          >
            genrate Color
          </button> */}

          {/* <button
            className={` px-3 py-1.5 rounded-md bg-lime-800 text-white active:scale-95 transition-all duration-300 ease-linear capitalize `}
            onClick={handleRGBColor}
          >
            {" "}
            rgb color
          </button> */}
        </section>
        {/* code-section */}
        <section>
          <p
            className={`border-2 bg-black px-4 py-2 font-bold capitalize text-3xl`}
          >{`your color code is : ${color}  `}</p>
          {/* <p
            className={`border-2 px-4 py-2 font-bold capitalize text-3xl`}>{`your color code is : ${color}  `}</p> */}
        </section>
      </main>
    </>
  );
}
export default App;
