const { Router } = require("express");
const router = Router();

const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
router.get("/character/:id", getCharById);

module.exports = router;
