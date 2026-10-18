const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['super_admin', 'admin', 'teacher', 'student', 'parent'], 
    required: true 
  },
  assignedClass: { type: String }, // e.g., "Grade 10"
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // For parents
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
