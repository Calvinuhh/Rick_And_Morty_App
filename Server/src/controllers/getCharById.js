// const axios = require("axios");

// const URL = "https://rickandmortyapi.com/api/character/";

// const getCharById = async (res, id) => {
//   axios(`${URL}${id}`)
//     .then(({ data }) => {
//       const { id, name, status, species, origin, gender, image } = data;
//       console.log(data);

//       const character = {
//         id,
//         name,
//         status,
//         species,
//         origin,
//         image,
//         gender,
//       };

//       res.writeHeader(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     })

//     .catch((err) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       return res.end(err.message);
//     });
// };

// module.exports = getCharById;

const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  try {
    const { id } = req.params;

    const response = await axios(`${URL}${id}`);

    if (response.data.id) {
      const { id, name, gender, species, origin, image, status } =
        response.data;

      const obj = {
        id: id,
        name: name,
        gender: gender,
        species: species,
        origin: origin.name,
        image: image,
        status: status,
      };
      res.status(200).json(obj);
    } else res.status(404).json({ message: "Not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// function getCharById(req, res) {
//   const { id } = req.params;
//   axios
//     .get(`${URL}${id}`)
//     .then((response) => {
//       if (response.data.id) {
//         const { id, name, gender, species, origin, image, status } =
//           response.data;

//         const obj = {
//           id: id,
//           name: name,
//           gender: gender,
//           species: species,
//           origin: origin.name,
//           image: image,
//           status: status,
//         };
//         res.status(200).json(obj);
//       } else res.status(404).json({ message: "Not found" });
//     })
//     .catch((error) => {
//       res.status(500).json({ message: error.message });
//     });
// }

module.exports = getCharById;
