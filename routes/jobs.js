const express = require("express");
const axios = require("axios");
const Job = require("../models/Job");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Fetch jobs from API and store in MongoDB
router.get("/fetch-jobs", async (req, res) => {
  try {
    const response = await axios.get("https://jsonfakery.com/jobs");
    await Job.deleteMany();
    const jobs = await Job.insertMany(response.data);
    res.json({ message: "Jobs saved", jobs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get stored jobs (Protected Route)
router.get("/jobs", authMiddleware, async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
