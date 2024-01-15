import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div className={style.contenedor}>
      <div className={style.contenedor_input}>
        <input className={style.input} type="search" />
        <button className={style.button} onClick={props.onSearch}>
          Agregar
        </button>
      </div>
    </div>
  );
}
