const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  targetAudience: { type: String, enum: ['All', 'Students', 'Teachers', 'Parents'], default: 'All' }
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
