const express = require("express");

const router = express.Router();

const fs = require("fs");

const path = require("path");


const dataPath = path.join(
  __dirname,
  "../data/caterers.json"
);


// GET ALL
router.get("/", (req, res) => {

  const data = fs.readFileSync(dataPath);

  const caterers = JSON.parse(data);

  res.json(caterers);

});


// GET SINGLE
router.get("/:id", (req, res) => {

  const data = fs.readFileSync(dataPath);

  const caterers = JSON.parse(data);

  const caterer = caterers.find(
    (item) => item.id == req.params.id
  );

  if (!caterer) {

    return res.status(404).json({
      message: "Caterer not found",
    });

  }

  res.json(caterer);

});


// CREATE
router.post("/", (req, res) => {

  const {
    name,
    location,
    pricePerPlate,
    cuisines,
    rating,
  } = req.body;


  // validation
  if (
    !name ||
    !location ||
    !pricePerPlate ||
    !cuisines ||
    !rating
  ) {

    return res.status(400).json({
      message: "All fields required",
    });

  }


  const data = fs.readFileSync(dataPath);

  const caterers = JSON.parse(data);


  const newCaterer = {
    id: caterers.length + 1,
    name,
    location,
    pricePerPlate,
    cuisines,
    rating,
  };


  caterers.push(newCaterer);


  fs.writeFileSync(
    dataPath,
    JSON.stringify(caterers, null, 2)
  );


  res.status(201).json(newCaterer);

});

module.exports = router;