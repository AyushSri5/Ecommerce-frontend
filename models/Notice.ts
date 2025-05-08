import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
    title: String,
    description: String,
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    targetRole: String,
    targetClass: String,
    createdAt: { type: Date, default: Date.now },
  });
  export default mongoose.models.Notice || mongoose.model('Notice', noticeSchema);