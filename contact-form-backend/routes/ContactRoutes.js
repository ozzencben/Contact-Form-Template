const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (!email.includes("@") || !email.includes(".com")) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const newMessage = new Contact({
      name,
      email,
      message,
    });
    await newMessage.save();

    res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;