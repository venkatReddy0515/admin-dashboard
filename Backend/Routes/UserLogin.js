const express = require("express");
const router = express.Router();
const User = require("./../Models/User");
const bcrypt = require("bcryptjs");

const { generateToken } = require("./GenerateToken");

router.post("/login", async (req, res) => {
  const { emailId, password } = req.body;
  try {
    const findUser = await User.findOne({ emailId });
    if (!findUser) {
      return res.status(400).json({ message: "User not found. Please sign up." });
    }
    
    const isPasswordValid = await bcrypt.compare(password, findUser.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Incorrect password." });
    }
    

    const token = generateToken(findUser.userId);
    return res.status(200).json({
      message: "Successfully logged in.",
      findUser,
      token
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.post("/register", async (req, res) => {
  const { emailId, password, username } = req.body;
  try {
    const existingUser = await User.findOne({ emailId });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }
    
    const newUser = new User({ emailId, username, password });
    console.log(newUser);
    await newUser.save();
    const token=generateToken(newUser.userId);
    return res.status(200).json({
      message: "Registration successful.",
      newUser,
      token
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to register", error: error.message });
  }
});

module.exports = router;
