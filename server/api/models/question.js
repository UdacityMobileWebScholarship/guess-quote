const mongoose = require("mongoose");

// Question Schema
const QuestionSchema = mongoose.Schema({
  question: { type: String },
  answer: { type: String },
  options: [{ type: String }]
});

// Question Model
const Question = mongoose.model("Question", QuestionSchema);

module.exports = { Question };
