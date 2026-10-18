const mongoose = require('mongoose');

const ReportCardSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  term: { type: String, required: true }, // e.g., "First Term 2026/2027"
  grades: [{
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
    score: { type: Number },
    remarks: { type: String }
  }],
  affectiveTraits: {
    punctuality: { type: String, enum: ['A', 'B', 'C', 'D', 'E'] },
    neatness: { type: String, enum: ['A', 'B', 'C', 'D', 'E'] },
    politeness: { type: String, enum: ['A', 'B', 'C', 'D', 'E'] }
  },
  psychomotorSkills: {
    handwriting: { type: String, enum: ['A', 'B', 'C', 'D', 'E'] },
    sports: { type: String, enum: ['A', 'B', 'C', 'D', 'E'] }
  }
}, { timestamps: true });

module.exports = mongoose.model('ReportCard', ReportCardSchema);
