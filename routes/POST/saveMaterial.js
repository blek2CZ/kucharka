const saveMaterial = require("express").Router();
const modelMaterial = require("../../models/material");

saveMaterial.post("/save-material", async (req, res) => {
  try {
    const { name } = req.body;
    const surovina = new modelMaterial({
      name: name,
    });

    // Uložení do databáze
    const savedMaterial = await surovina.save();

    res.json({
      msg: `Došlo k úspěšnému uložení receptu ${JSON.stringify(savedMaterial)}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Bohužel nedošlo k uložení suroviny",
    });
  }
});

saveMaterial.get("/save-material", (req, res) => {
  res.send("Ano, navštívil jsi /save-material GETEM");
});

module.exports = saveMaterial;
