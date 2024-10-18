
import Pokemons from './pages/Pokemons';
import Navbar from './components/Navbar';
import Loading from './components/Loading';




const App = () => {
  return <>
    <main className='w-full overflow-hidden'>
      <Navbar/>
      <Pokemons/>
     
    </main>
  </>;
};

export default App;
