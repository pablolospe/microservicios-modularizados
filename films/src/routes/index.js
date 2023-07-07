const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getFilms)
router.get("/:id", controllers.getOneFilm)
router.post("/", controllers.createFilm)
// router.post("/", middlewares.filmValidation, controllers.createFilm)

module.exports = router;