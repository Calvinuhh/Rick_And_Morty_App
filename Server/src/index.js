const http = require("http");
const {getCharById} = require("./controllers/getCharById");

const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req;

    if (url.includes("/rickandmorty/character")) {
      const arrUrl = url.split("/");
      const id = arrUrl[arrUrl.length - 1];

      return getCharById(res, +id);
    }
    res.end("Personaje no encontrado");
  })
  .listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
