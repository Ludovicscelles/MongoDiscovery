const express = require("express");
const router = express.Router();
const TechModel = require("./tech.model");
const { mongo } = require("mongoose");

router.get("/", async (req, res) => {
  try {
    const techs = await TechModel.find();
    res.status(200).json({ result: techs });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des technos" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, description, level, linkedProject } = req.body;
    const tech = new TechModel({ name, description, level, linkedProject });
    const result = await tech.save();
    res.status(201).json({ result, message: "Techno créée" });
  } catch (error) {
    console.error("Erreur lors de la création :", error.message, error); // Log complet
    res.status(400).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TechModel.findById(id);
    res.status(200).json({ result });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erreur lors de la récupération de la techno" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongo.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Id invalide" });
    }

    const result = await TechModel.findOneAndUpdate(
      {
        _id: id,
      },
      req.body,
      { new: true, runValidators: true }
    );

    console.log("body", req.body);

    if (!result) {
      return res.status(400).json({ error: "Aucune techno trouvée" });
    }

    res.status(200).json({ result, message: "Techno modifiée" });
  } catch (error) {
    console.error("Erreur lors de la modification :", error.message, error); // Log complet
    res
      .status(500)
      .json({ error: "Erreur lors de la modification de la techno" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TechModel.deleteOne({
      _id: id,
    });
    res.status(200).json({ result, message: "Techno supprimée" });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erreur lors de la suppression de la techno" });
  }
});

module.exports = router;
