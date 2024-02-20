const users = require("../utils/users");

const login = async (req, res) => {
  const { email, password } = req.query;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    return res.json({ access: true });
  } else {
    return res.status(401).json({ access: false });
  }
};

module.exports = login;
