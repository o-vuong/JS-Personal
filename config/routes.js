const express = require("express");
const router = express.Router();

const sectionController = require("../controllers/sectionController");

// Route to get all sections
router.get("/", sectionController.getAllSections);

// Route to get a specific section by id
router.get("/:id", sectionController.getSectionById);

// Route to create a new section
router.post("/", sectionController.createSection);

// Route to update a section
router.put("/:id", sectionController.updateSection);

// Route to delete a section
router.delete("/:id", sectionController.deleteSection);

module.exports = router;
