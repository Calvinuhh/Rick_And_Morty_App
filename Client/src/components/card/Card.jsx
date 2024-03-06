import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";

const Card = (props) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav({
        id: props.id,
        name: props.name,
        status: props.status,
        gender: props.gender,
        species: props.species,
        image: props.image,
      });
    }
  };

  useEffect(() => {
    console.log(props);
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <div className={style.contenedor}>
      <img className={style.imagen} src={props.image} alt="foto" />
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <div className={style.divName}>
        <Link className={style.link} to={`/detail/${props.id}`}>
          <h1 className={`${style.texto} ${style.name}`}>{props.name}</h1>
        </Link>
      </div>
      <h2 className={`${style.texto} ${style.otro}`}>{props.status}</h2>
      <h2 className={style.texto}>{props.species}</h2>
      <h2 className={style.texto}>{props.gender}</h2>
      <h2 className={style.texto}>{props.origin && props.origin.name}</h2>
      <button className={style.button} onClick={() => props.onClose(props.id)}>
        X
      </button>
    </div>
  );
};

// export default Card

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, { addFav, removeFav })(Card);
