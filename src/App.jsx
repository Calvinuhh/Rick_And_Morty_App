import { useState } from "react";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";

const URL = "https://rickandmortyapi.com/api/character/";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    fetch(`${URL}${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters([...characters, data]);
      });
  };

  const onClose = (id) => {
    const personajesFiltrados = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(personajesFiltrados);
  };
  
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
