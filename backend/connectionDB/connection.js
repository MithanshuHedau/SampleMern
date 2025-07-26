const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connected to the database successfully");
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
};

module.exports = connectDB;
