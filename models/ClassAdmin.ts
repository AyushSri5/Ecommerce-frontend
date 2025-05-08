import mongoose from "mongoose";

const classAdminSchema = new mongoose.Schema({
    className: String,
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  });
  export default mongoose.models.ClassAdmin || mongoose.model('ClassAdmin', classAdminSchema);