//import logo from '../images/logo.svg';
import '../styles/App.scss';
import listPhrases from '../data/phrases.json';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(listPhrases);
  const [newPhrase, setNewPhrase] = useState({
    quote: '',
    character: '',
  })

  const handleNewContact = (ev) => {
    setNewPhrase({
      ...newPhrase,
      [ev.target.id]: ev.target.value,
    });
  };
  const handleClick = (ev) => {
    ev.preventDefault();
    setData([...data, newPhrase]);
    setNewPhrase({
      quote: '',
      character: '',
    });
  };
  const htmlData = data
  return (
    <div className="App">

      {/*HEADER*/}
      <header>
        <h1>Freases de Friends</h1>
        <form action="">

        </form>
      </header>
      <main>
        {/* lista de frases */}
        <ul>{htmlData}</ul>
        {/*nueva frase */}
        <form action="">
          <h2>Añadir una nueva frase</h2>
          <input
            type="text"
            name="quote"
            id="quote"
            onChange={handleNewContact}
            value={newPhrase.quote}
          />
          <input
            type="text"
            name="character"
            id="character"
            onChange={handleNewContact}
            value={newPhrase.character}
          />
          <input
            type='submit'
            value='Añadir una nueva frase'
            onClick={handleClick}
          />
        </form>

      </main>
    </div >
  );
}

export default App;
