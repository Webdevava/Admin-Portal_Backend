// src/routes/memberRoutes.js

const express = require("express");
const router = express.Router();
const Member = require("../models/Member.js");

// Update member
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  try {
    const updatedMember = await Member.findByIdAndUpdate(
      id,
      { name, age },
      { new: true }
    );
    res.json(updatedMember);
  } catch (error) {
    console.error("Update member error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
