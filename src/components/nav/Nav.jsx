// import React from "react";
import style from "./Nav.module.css";
import SearchBar from "../searchBar/SearchBar";

const Nav = ({onSearch}) => {
  return (
    <div className={style.contenedor}>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
