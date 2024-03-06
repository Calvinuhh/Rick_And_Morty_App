import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx";
import Form from "./components/form/Form.jsx";
import Favorites from "./components/favorites/Favorites.jsx";

export const URL = `http://localhost:3001/rickandmorty/character/`;

function App() {
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  async function login(userData) {
    try {
      const { username, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";

      const response = await axios(
        URL + `?email=${username}&password=${password}`
      );
      const { access } = response.data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log("error", error);
    }
  }

  const onSearch = async (id) => {
    try {
      const response = await fetch(`${URL}${id}`);
      const data = await response.json();
      setCharacters([...characters, data]);
    } catch (error) {
      console.log("error", error);
    }

    // fetch(`${URL}${id}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCharacters([...characters, data]);
    //   });
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
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
