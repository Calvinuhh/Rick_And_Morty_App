// const users = require("../utils/users");

const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;

  try {
    if (!email || !password) return res.status(400).send("faltan datos");

    const user = await User.findOne({
      where: { email: email },
    });

    if (!user) return res.status(404).send("Usuario no encontrado");

    return user.password === password
      ? res.json({ access: true })
      : res.status(500).send("Contraseña incorrecta");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = login;
