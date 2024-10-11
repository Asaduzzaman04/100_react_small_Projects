// import { useEffect, useState } from "react";


// const useImages = () => {
//     const [image, setImage] = useState()
//     const [fail,setFail] = useState()
   // const imageApi = 'https://picsum.photos/v2/list?page=1&limit=5'
//   useEffect(() =>{
//     const getApi = async () =>{
//        try{
//         const response = await fetch(imageApi)
//         if(!response.ok){
//             throw new Error("data not found")
//         }
//         const result = await response.json()
//         setImage(result)
//        }catch(err){
//         setFail(err)
//        }
//     }
//     getApi()
//   },[])

//   return [image,fail]
  
// };

// export default useImages;