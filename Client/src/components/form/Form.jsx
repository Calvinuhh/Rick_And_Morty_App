import { useState } from "react";
import style from "./Form.module.css";
import validation from "../../utils/validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
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

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  const handleChange = (event) => {
    event.preventDefault();

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );

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
      <form className={style.form} onSubmit={handleSubmit}>
        <img
          className={style.imagen}
          src="../../../public/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_FMjpg_UX1000_.jpg"
          alt="Rick and Morty Poster"
        />
        <label className={style.label}>Email:</label>
        <input
          className={`${style.input} ${errors.username && style.warning}`}
          type="text"
          name="username"
          placeholder="Email..."
          value={userData.username}
          onChange={handleChange}
        />
        {errors.username ? (
          <span className={style.warning}>{errors.username}</span>
        ) : undefined}
        <label className={style.label}>Password:</label>
        <input
          className={`${style.input} ${errors.password && style.warning}`}
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password ? (
          <span className={style.warning}>{errors.password}</span>
        ) : undefined}

        <button className={style.button}>Login</button>
      </form>
    </div>
  );
};

export default Form;
