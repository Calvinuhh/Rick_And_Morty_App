import style from "./Detail.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { URL } from "../../App";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`${URL}${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.contenedor}>
      <h1 className={style.titulo}>{character.name}</h1>
      <img
        className={style.imagen}
        src={character.image}
        alt={character.name}
      />
      <h3 className={style.texto}> {character.status} </h3>
      <h2 className={style.texto}> {character.species}</h2>
      <h2 className={style.texto}> {character.gender}</h2>
      <h2 className={style.texto}> {character.origin?.name}</h2>
    </div>
  );
};

export default Detail;
