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

  const [filterPhrase, setFilterPhrase] = useState('');
  const handleFilter = (ev) => {
    setFilterPhrase(ev.currentTarget.value);
  }




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
    .filter(
      (phrase) =>
        phrase.quote.toLowerCase().includes(filterPhrase.toLowerCase()))
    .filter((phrase) =>
      phrase.character.toLowerCase().includes(filterPhrase.toLowerCase()))

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
          Filtrar por frase<input
            type='text'
            name='searchPhrase'
            id='searchPhrase'
            onChange={handleFilter}

          />
          Filtrar por personaje
          <input
            type='text'
            name='searchCharacter'
            id='searchCharacter'
            onChange={handleFilter}

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
