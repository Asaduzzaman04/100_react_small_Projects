import { useState } from 'react';
import data from './data';
import Faq from './Faq';



const Accordians = () => {
const [select, setSelect] = useState(false)
const [close,setClose] = useState(false)
    const handleClick = (elem) =>{
        setSelect(elem)
        setClose(!close)
    }


    return (
        <>
        {/* data */}
            <div  className='  w-[40%]  flex flex-col justify-center items-center gap-5 transition-all duration-300 ease-linear   '>
                {
                   data && data.length > 0 ?  data.map((element,index) => <Faq close={close} select={select} value={element} key={index} handleClick={handleClick}/>) : <h2>data not found</h2>
                }
            </div>
        </>
    );
};

export default Accordians;