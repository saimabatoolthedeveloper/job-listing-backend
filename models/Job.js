const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  salary_from: { type: Number, required: true },
  salary_to: { type: Number, required: true },
  employment_type: { type: String, required: true },
  application_deadline: { type: String, required: true },
  qualifications: { type: [String], required: true },
  contact: { type: String, required: true },
  job_category: { type: String, required: true },
  is_remote_work: { type: Boolean, required: true },
  number_of_opening: { type: Number, required: true },
  created_at: { type: String, required: true },
  updated_at: { type: String, required: true }
});

module.exports = mongoose.model("Job", jobSchema);
