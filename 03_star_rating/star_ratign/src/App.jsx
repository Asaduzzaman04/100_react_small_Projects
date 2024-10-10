/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar } from "react-icons/fa";

function App({ amount }) {
  // let arr = [...Array(amount)]
  // console.log(arr);
  //let num  = [1,2,3,4,5]
  // num.map((e) => {
  //   return e
  // })
  const [select, setSelect] = useState("");
  const [click, setClick] = useState(false);
  // const [rating,setRating] = useState([])

  const start = [...Array(amount)];

  const handleClickStar = (elem) => {
    // if(!rating) return
    // if(!rating.includes(elem)){
      // setRating((r) => [...r,select])
      // }
      
    setSelect(elem);
    setClick(!click);
    
  };
  // console.log(select);

  return (
    <>
      <main className="bg-black h-[100vh] text-white w-full justify-center items-center flex ">
        <div className="flex text-7xl text-white  gap-2 ">
          {start.map((_, index) => {
          
        
            return (
              <>
                <button
                 
                  onClick={() => handleClickStar(index)}
                  className={ `${ index <= select  ? "text-yellow-400" : "text-white"}  transition-all duration-300 ease-linear`} >
                  <FaStar key={index} />
                  <div className="text-sm">
                  <p> the index value{index}</p>
                  <p>the select value {select}</p>
                  </div>
                </button>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
