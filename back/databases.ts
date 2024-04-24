import mongoose from 'mongoose';

const DB_URI = 'mongodb+srv://igor:azerty@cluster0.z5n331t.mongodb.net/User';

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Could not connect to the database', error);
    process.exit(1);
  }
};

export default connectDB;