let myFavorites = [];

const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, gender, species, origin, image, status, onClose } =
    req.body;
  const character = {
    id,
    name,
    gender,
    species,
    origin,
    image,
    status,
    onClose,
  };

  try {
    if (!name || !gender || !species || !origin || !image || !status)
      return res.status(401).send("Faltan datos");

    await Favorite.findOrCreate({
      where: {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      },
    });

    const allFavorites = await Favorite.findAll();
    return res.json(allFavorites);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {
    await Favorite.destroy({
      where: {
        id: id,
      },
    });

    const allFavorites = await Favorite.findAll();

    return res.json(allFavorites);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { postFav, deleteFav };