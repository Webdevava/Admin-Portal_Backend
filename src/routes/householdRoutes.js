// src/routes/householdRoutes.js

const express = require("express");
const router = express.Router();
const Household = require("../models/Household.js");

// Fetch all households
router.get("/", async (req, res) => {
  try {
    const households = await Household.find();
    res.json(households);
  } catch (error) {
    console.error("Fetch households error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
