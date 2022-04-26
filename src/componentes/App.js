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
    .map((phrase, i) => {
      return (
        <li key={i}>
          <p>{phrase.quote}</p>
          <p>{phrase.character}</p>
        </li>
      )
    })
  return (
    <div className="App">


      <header>
        <h1>Freases de Friends</h1>
        <form action="">
          <input
            type='text'
            name='searchPhrase'
            id='searchPhrase'

          />
          <input
            type='text'
            name='searchCharacter'
            id='searchCharacter'

          />
        </form>
      </header>
      <main>

        <ul>{htmlData}</ul>

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
