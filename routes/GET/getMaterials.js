const getMaterials = require("express").Router();
const materials = require("../../models/material");

getMaterials.get("/get-materials", async (request, response) => {
  try {
    // Vyhledání všech materiálů v databázi
    const docs = await materials.find({});

    response.json({
      msg: "Úspěšně se nám podařilo získat všechny suroviny",
      documents: docs,
    });
  } catch (err) {
    console.error(err);
    response.status(500).json({
      msg: "Bohužel se nepodařilo získat žádné dokumenty",
      documents: [],
    });
  }
});

module.exports = getMaterials;

/*
const getMaterials = require("express").Router();
const materials = require("../../models/material")

getMaterials.get("/get-materials", (request, response) => {
  materials.find({}, (err, docs) => {
    if(err){
      return res.json({
        msg: "Bohužel se nepodařilo získat žádné dokumenty",
        documents:[]
      })
    }else{
      return res.json({
        msg:"Úspěšně se nám podařilo získat všechny suroviny",
        documents: docs
      })
    }
  })
});

module.exports = getMaterials;
*/