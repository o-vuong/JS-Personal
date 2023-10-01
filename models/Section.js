const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SectionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = Section = mongoose.model('section', SectionSchema);
