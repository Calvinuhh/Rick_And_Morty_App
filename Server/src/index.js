// const http = require("http");
// const {getCharById} = require("./controllers/getCharById");

// const PORT = 3001;

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     const { url } = req;

//     if (url.includes("/rickandmorty/character")) {
//       const arrUrl = url.split("/");
//       const id = arrUrl[arrUrl.length - 1];

//       return getCharById(res, +id);
//     }
//     res.end("Personaje no encontrado");
//   })
//   .listen(PORT, () => {
//     console.log(`Server is running on port http://localhost:${PORT}`);
//   });

const express = require("express");
const router = require("./routers");
const server = express();
const PORT = 3001;
const { conn } = require("./DB_connection");

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use("/rickandmorty", router);


conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: http://localhost:${PORT}`);
  });
});
