const express = require("express");

const router = express.Router();

const Caterer = require("../models/Caterer");


// GET ALL
router.get("/", async (req, res) => {

  try {

    const caterers = await Caterer.find();

    res.json(caterers);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// GET SINGLE
router.get("/:id", async (req, res) => {

  try {

    const caterer = await Caterer.findById(req.params.id);

    if (!caterer) {

      return res.status(404).json({
        message: "Caterer not found",
      });

    }

    res.json(caterer);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// CREATE
router.post("/", async (req, res) => {

  try {

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
        message: "All fields are required",
      });

    }


    const caterer = new Caterer({
      name,
      location,
      pricePerPlate,
      cuisines,
      rating,
    });

    const savedCaterer = await caterer.save();

    res.status(201).json(savedCaterer);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;