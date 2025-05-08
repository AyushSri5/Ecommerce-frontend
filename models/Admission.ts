// models/Admission.ts
import mongoose from 'mongoose';

const AdmissionSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    admissionDate: { type: Date, required: true },
    class: { type: String, required: true },
    guardianDetails: { type: String, required: true },
    documents: [String], // array of file paths or URLs
  },
  { timestamps: true }
);

export default mongoose.models.Admission || mongoose.model('Admission', AdmissionSchema);
