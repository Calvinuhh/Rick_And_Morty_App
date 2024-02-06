import Card from "../card/Card.jsx";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.contenedor} key={characters.id}> 
      {characters.map((characters) => (
        <Card
          key={characters.id}
          id={characters.id}
          name={characters.name}
          status={characters.status}
          species={characters.species}
          gender={characters.gender}
          origin={characters.origin.name}
          image={characters.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
