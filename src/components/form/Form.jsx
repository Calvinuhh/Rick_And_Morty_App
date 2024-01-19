import { useState } from "react";
import style from "./Form.module.css";

const Form = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  // const handleInputSubmit = (event) => {
  //   event.preventDefault();

  //   setUserData({
  //     ...userData,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const handleChange = (event) => {
    event.preventDefault();
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div
      className={style.contenedor}
      // onSubmit={handleInputSubmit}
    >
      <form className={style.form}>
        <img
          className={style.imagen}
          src="../../../public/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_FMjpg_UX1000_.jpg"
          alt="Rick and Morty Poster"
        />
        <label className={style.label}>Email:</label>
        <input
          className={style.input}
          type="text"
          name="username"
          placeholder="Email..."
          value={userData.username}
          onChange={handleChange}
        />

        <label className={style.label}>Password:</label>
        <input
          className={style.input}
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />

        <button className={style.button}>Login</button>
      </form>
    </div>
  );
};

export default Form;
