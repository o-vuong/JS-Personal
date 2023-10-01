const Section = require("../models/Section");

// Get all sections
exports.getAllSections = async (req, res) => {
  try {
    const sections = await Section.find();
    res.json(sections);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Get a specific section by id
exports.getSectionById = async (req, res) => {
  try {
    const section = await Section.findById(req.params.id);
    if (!section) {
      return res.status(404).json({ msg: "Section not found" });
    }
    res.json(section);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Create a new section
exports.createSection = async (req, res) => {
  const { title, content } = req.body;
  try {
    let section = new Section({
      title,
      content,
    });
    await section.save();
    res.json(section);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Update a section
exports.updateSection = async (req, res) => {
  const { title, content } = req.body;
  const updatedSection = {};
  if (title) updatedSection.title = title;
  if (content) updatedSection.content = content;

  try {
    let section = await Section.findById(req.params.id);
    if (!section) {
      return res.status(404).json({ msg: "Section not found" });
    }

    section = await Section.findByIdAndUpdate(
      req.params.id,
      { $set: updatedSection },
      { new: true }
    );

    res.json(section);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Delete a section
exports.deleteSection = async (req, res) => {
  try {
    let section = await Section.findById(req.params.id);
    if (!section) {
      return res.status(404).json({ msg: "Section not found" });
    }

    await Section.findByIdAndRemove(req.params.id);
    res.json({ msg: "Section removed" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
