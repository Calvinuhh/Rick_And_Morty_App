import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Card from "../card/Card.jsx";
import style from "./Favorites.module.css";
import { filterCards, orderCards, removeFav } from "../../redux/actions.js";
import { useState } from "react";

const Favorites = (props) => {

  const [aux, setAux] = useState(false);

  const myFavorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();

  const handleOrder = (e) => {
    setAux(!aux);

    dispatch(orderCards(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <>
      <div className={style.divFiltros}>
        <select className={style.filtros} onChange={handleOrder}>
          <option value="a">Ascendente</option>
          <option value="d">Descendente</option>
        </select>

        <select className={style.filtros} onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female"> Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>

      <div className={style.cont}>
        {props.myFavorites.map((item) => {
          return (
            <div className={style.contenedor} key={item.id}>
              <Card
                id={item.id}
                name={item.name}
                status={item.status}
                species={item.species}
                gender={item.gender}
                origin={item.origin}
                image={item.image}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, { filterCards, orderCards, removeFav })(
  Favorites
);
