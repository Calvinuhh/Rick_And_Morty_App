const http = require("http");
const characters = require("./utils/data.js");

const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req;

    if (url.includes("/rickandmorty/character")) {
      const arrUrl = url.split("/");
      const id = arrUrl[arrUrl.length - 1];

      const character = characters.find((character) => character.id === +id);

      if (character) {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(character));
      }

      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("Character not found");
    }
    res.end("Hello, World!");
  })
  .listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
