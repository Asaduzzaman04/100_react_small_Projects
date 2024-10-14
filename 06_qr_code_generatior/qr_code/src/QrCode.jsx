import {  useState } from "react";


const QrCode = () => {
    const [inputValue,setInputValue] = useState('')
    const [code,setCode] = useState()

   

const handleGenerate = () =>{
    setCode(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`)

}
    return (
        <div className="bg-gray-100 flex justify-center items-center w-full h-[100vh]">
            <div className="bg-white p-6 rounded-lg flex flex-col justify-center items-center gap-2 shadow-lg w-full max-w-sm">
    <h1 className="text-2xl font-bold mb-4 text-center">QR Code Generator</h1>
    <div className="mb-4">
      <input id="qrInput" type="text" placeholder="Enter text or URL" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
    <img src={code} alt=""  className="mb-3"/>
    <button id="generateBtn" onClick={handleGenerate} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Generate QR Code</button>
    <div id="qrCode" className="mt-6 flex justify-center"></div>
  </div>
        </div>
    );
};

export default QrCode;