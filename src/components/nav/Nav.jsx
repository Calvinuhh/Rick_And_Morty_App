import style from "./Nav.module.css";
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div className={style.contenedor}>
      <SearchBar onSearch={onSearch} />
      <div className={style.contenedor_rutas}>
        <Link className={style.ruta} to="/home">
          Home
        </Link>
        <Link className={style.ruta} to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Nav;
