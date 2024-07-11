const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  companyDescription: {
    type: String,
    required: true
  },
  companyEmail: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address']
  },
  companyPhone: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
  },
  opportunity: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
