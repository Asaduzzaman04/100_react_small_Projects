
import Pokemons from './pages/Pokemons';
import Navbar from './components/Navbar';




const App = () => {
  return <>
    <main className='w-full h-[100vh]  relative z-10'>
     
      <Navbar/>
      <Pokemons/>

    </main>
  </>;
};

export default App;
