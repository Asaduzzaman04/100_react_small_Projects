import { useState } from "react";



const useItemsData = () => {
 const [apiData, setApiData] = useState([]);
 const [apiLoading, setApiLoading] = useState(true);
 const [apiError, setApiError] = useState('');


};

export default useItemsData;