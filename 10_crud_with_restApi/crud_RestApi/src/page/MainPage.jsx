import { useState } from 'react';
import Form from './../components/Form/Form';
import Home from './Home';
import useItemsData from '../hooks/useItemsData';


const MainPage = () => {
    const [search, setSearch] = useState('')
    const [apiData, apiLoading, apiError, handleDelete,setApiData] = useItemsData();
   
    return (
        <>
            <div className="flex  flex-col justify-center items-center">
            <header className='py-3 w-full md:w-auto' >
                <Form value={{search, setSearch,setApiData,apiData}} />
            </header>
            <main className='w-full flex justify-center items-center'>
                <Home searchValue={search} value={{apiData, apiLoading, apiError, handleDelete}}/>
            </main>
            </div>
        </>
    );
};

export default MainPage;