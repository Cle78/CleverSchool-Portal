const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  questions: [{
    questionText: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: Number, required: true } // Index of options array
  }],
  results: [{
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    score: { type: Number }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Quiz', QuizSchema);
