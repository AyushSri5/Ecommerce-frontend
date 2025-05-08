import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    class: String,
    term: String,
    subjects: [
      { subject: String, marksObtained: Number, maxMarks: Number },
    ],
    percentage: Number,
    grade: String,
    remarks: String,
  });
  export default mongoose.models.Result || mongoose.model('Result', resultSchema);