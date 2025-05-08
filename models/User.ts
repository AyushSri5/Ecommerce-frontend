import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ['student', 'teacher', 'admin'] },
  classAssigned: String,
  studentClass: String,
  admissionDetails: Object,
});

export default mongoose.models.User || mongoose.model('User', userSchema);
