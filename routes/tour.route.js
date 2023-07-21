const tourController = require("../controllers/tour.controllers");

const tourRouter = require("express").Router();

tourRouter.get("/", tourController.getTours);

tourRouter.post("/", tourController.createTours);

tourRouter.get("/:id", tourController.getToursByid);

tourRouter.patch("/:id", tourController.patchTours);

tourRouter.delete("/:id", tourController.deleteTours);

module.exports = tourRouter;
