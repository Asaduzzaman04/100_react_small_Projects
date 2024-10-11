/* eslint-disable react/prop-types */


const Images = ({value,index,slide}) => {
    return (
        <div className={`h-full   w-full  rounded-xl flex-shrink-0 ${slide === index ? "block" : "hidden"} `}>
                <img src={value.download_url} key={value.id}  className="rounded-md"/>
        </div>
    );
};

export default Images;