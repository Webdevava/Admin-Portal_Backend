// src/models/Household.js

const mongoose = require("mongoose");

const householdSchema = new mongoose.Schema({
  householdId: { type: String, required: true, unique: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Member" }],
});

module.exports = mongoose.model("Household", householdSchema);
