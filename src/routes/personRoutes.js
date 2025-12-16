import PersonController from "../controllers/personController.js";
import express from "express";

const router = express.Router();

router.get("/", new PersonController().getPeople);
router.post("/", new PersonController().createPerson);

export default router;