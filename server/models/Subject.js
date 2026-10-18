const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  gradeLevel: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Subject', SubjectSchema);
