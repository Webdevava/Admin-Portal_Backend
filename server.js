const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import CORS middleware
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware configuration
// CORS middleware configuration
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
  })
);

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => console.log("Connected to MongoDB"));
db.on("error", (err) => console.error("MongoDB connection error:", err));


// Routes
const authRoutes = require("./src/routes/authRoutes.js");
const householdRoutes = require("./src/routes/householdRoutes.js");
const memberRoutes = require("./src/routes/memberRoutes.js");

app.use("/api/auth", authRoutes);
app.use("/api/households", householdRoutes);
app.use("/api/members", memberRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
