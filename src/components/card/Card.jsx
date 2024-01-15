import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={style.contenedor}>
      <img className={style.imagen} src={props.image} alt="foto" />
      <div className={style.divName}>
        <h1 className={`${style.texto} ${style.name}`}>{props.name}</h1>
      </div>
      <h2 className={`${style.texto} ${style.otro}`}>{props.status}</h2>
      <h2 className={style.texto}>{props.species}</h2>
      <h2 className={style.texto}>{props.gender}</h2>
      <h2 className={style.texto}>{props.origin.name}</h2>
      <button className={style.button} onClick={props.onClick}>
        X
      </button>
    </div>
  );
}
