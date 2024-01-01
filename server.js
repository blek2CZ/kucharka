const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./databaze/connect");
const getMaterials = require("./routes/GET/getMaterials");
const saveMaterial = require("./routes/POST/saveMaterial");

db.connect();
/**
 * Middleware
 * Povolme přijímat JSON z frontendu
 */
app.use(express.json({ extended: false }));

/**
 *  Routy - GET
 */
app.use("/", getMaterials);

/**
 * Routy - POST
 */
app.use("/", saveMaterial);

app.get("/", (request, response) => {
  response.send("Jsi na hlavní stánce milý uživateli!");
});

app.listen(PORT, (err) => {
  console.log(`server běží na port: ${PORT}`);
});
