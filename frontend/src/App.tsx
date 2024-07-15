import { useState } from 'react';
import MALBox from './components/MALBox';
import SongTable from './components/SongTable';

function App() {
  const [username, setUsername] = useState('');
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
            <MALBox setUsername={setUsername} />
            <SongTable username={username} />
      </main>
    </div>
  );
}

export default App;
