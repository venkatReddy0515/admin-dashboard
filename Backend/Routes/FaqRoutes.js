const express = require("express");
const router = express.Router();
const Faq = require("../Models/FaqSchema");
const dotenv = require("dotenv");
dotenv.config();

router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const faqs = await Faq.find(filter);
    res.status(200).json({ message: "FAQs found", faqs });
  } catch (error) {
    console.error("Error retrieving FAQs:", error.message);
    res.status(500).json({
      message: "An error occurred while retrieving FAQs.",
      error: error.message,
    });
  }
});
router.post("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    if (updatedData.category) {
      const allowedCategories = [
        "Restaurant Dashboard",
        "Marketing",
        "Tiffin",
        "Live Event",
        "Modulator Dashboard",
        "clam Restaurant",
      ];
      if (!allowedCategories.includes(updatedData.category)) {
        return res.status(400).json({ message: "Invalid category provided." });
      }
    }

    // Find the FAQ by ID
    const findFaq = await Faq.findById(id);
    if (!findFaq) {
      return res.status(404).json({ message: "FAQ not found." });
    }

    // Update only the "a" field (the answer)
    if (updatedData.a) {
      findFaq.a = updatedData.a;
    } else {
      return res.status(400).json({ message: "No answer provided for update." });
    }

    // Save the updated FAQ
    await findFaq.save();

    res.status(200).json({ message: "FAQ updated successfully", faq: findFaq });
  } catch (error) {
    console.error("Error updating FAQ:", error.message);
    res.status(500).json({
      message: "An error occurred while updating the FAQ.",
      error: error.message,
    });
  }
});

module.exports = router;
