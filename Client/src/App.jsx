import { useEffect, useState } from "react";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx";
import Form from "./components/form/Form.jsx";
import Favorites from "./components/favorites/Favorites.jsx";

export const URL = `http://localhost:3001/rickandmorty/character/`;

function App() {
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  let { userId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const EMAIL = "calvin.uhh@gmail.com";
  const PASSWORD = "clave1";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function login(userData) {
    if (userData.password === PASSWORD && userData.username === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

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
