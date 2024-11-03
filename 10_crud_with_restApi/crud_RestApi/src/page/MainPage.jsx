import { useState } from 'react';
import Form from './../components/Form/Form';
import Home from './Home';


const MainPage = () => {
    const [search, setSearch] = useState('')
   
    return (
        <>
            <div className="flex  flex-col justify-center items-center">
            <header className='py-3 w-full md:w-auto' >
                <Form value={{search, setSearch}} />
            </header>
            <main className='w-full flex justify-center items-center'>
                <Home searchValue={search}/>
            </main>
            </div>
        </>
    );
};

export default MainPage;