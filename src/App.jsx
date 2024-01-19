import { useState } from "react";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx";
import Form from "./components/form/Form.jsx";

export const URL = "https://rickandmortyapi.com/api/character/";

function App() {
  const [characters, setCharacters] = useState([]);

  const location = useLocation();

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
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : undefined}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
