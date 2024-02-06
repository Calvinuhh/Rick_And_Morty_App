import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleClick = () => {
    props.onSearch(id);
  };

  const handleOnChange = ({ target }) => {
    setId(target.value);
  };

  return (
    <div className={style.contenedor}>
      <div className={style.contenedor_input}>
        <input
          onChange={handleOnChange}
          value={id}
          className={style.input}
          placeholder="id.."
          type="search"
        />
        <button className={style.button} onClick={handleClick}>
          Agregar
        </button>
      </div>
    </div>
  );
}
