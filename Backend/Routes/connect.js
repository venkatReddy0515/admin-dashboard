const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const connect = () =>
  mongoose.connect(process.env.Mongo_url)
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = connect;
