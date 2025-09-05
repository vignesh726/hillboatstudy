const mongoose = require('mongoose');

let isMongoConnected = false;

const connectDB = async () => {
  const uri = "mongodb://adminvignesh:vignesh%4095@157.173.220.247:27017/hillboatstudy_db?authSource=admin";

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 3000,
      connectTimeoutMS: 3000
    });
    console.log('MongoDB connected successfully');
    isMongoConnected = true;
  } catch (error) {
    console.warn('MongoDB not available - using in-memory storage for demo');
    isMongoConnected = false;
    mongoose.disconnect();
  }
};

module.exports = { connectDB, isMongoConnected: () => isMongoConnected };