require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const jobRoutes = require("./routes/jobs");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.use("/api", jobRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
