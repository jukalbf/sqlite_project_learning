import PersonController from "../controllers/personController.js";
import express from "express";
import PersonModel from "../models/personModel.js";

const router = express.Router();

router.get("/", new PersonModel().getPeople);
router.post("/", new PersonController().createPerson);

export default router;