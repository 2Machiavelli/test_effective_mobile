
import express from "express";

import appealController from "../controllers/appeal.controller.js";

const appeal_routes = express.Router();

appeal_routes.post("/create", appealController.create);
appeal_routes.patch("/:id/set-in-progress", appealController.setInProgress);
appeal_routes.patch("/:id/set-done", appealController.setIsDone);
appeal_routes.patch("/:id/close", appealController.close);
appeal_routes.get("/get-appeals", appealController.getAppeals);
appeal_routes.patch(
  "/close-all-in-progress",
  appealController.closeAllInProgress
);

export default appeal_routes;
