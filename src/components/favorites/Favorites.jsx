import { connect } from "react-redux";
import Card from "../card/Card.jsx";
import style from "./Favorites.module.css";

const Favorites = (props) => {
  return (
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
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, {})(Favorites);
