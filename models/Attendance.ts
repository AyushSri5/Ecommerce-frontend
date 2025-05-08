import mongoose from 'mongoose';


const attendanceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: Date,
    status: { type: String, enum: ['present', 'absent', 'leave'] },
    role: String,
  });
  export default mongoose.models.Attendance || mongoose.model('Attendance', attendanceSchema);
  