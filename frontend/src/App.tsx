import MALBox from './components/MALBox';
import SongTable from './components/SongTable';

function App() {
  return (
    <div>
      <header className='p-4'>
        <nav>
          <a href='https://animelos.com'
          className='hover:underline'>
            <h1 className='text-2xl font-bold'>Animelody</h1>
          </a>
        </nav>
      </header>
      <main>
        <MALBox></MALBox>
        <SongTable></SongTable>
      </main>
    </div>
  );
}

export default App;
