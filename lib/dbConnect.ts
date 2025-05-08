import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

export const dbConnect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: 'schoolDB',
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};
