const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (res, id) => {
  axios(`${URL}${id}`)
    .then(({ data }) => {
      const { id, name, status, species, origin, gender, image } = data;
      console.log(data);

      const character = {
        id,
        name,
        status,
        species,
        origin,
        image,
        gender,
      };

      res.writeHeader(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })

    .catch((err) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end(err.message);
    });
};

module.exports = {
  getCharById
};
