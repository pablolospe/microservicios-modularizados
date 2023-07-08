const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getFilms)
router.get("/:id", controllers.getOneFilm)
router.delete("/:id", controllers.deleteFilm)
router.post("/", controllers.createFilm)
router.put("/:id", controllers.updateFilm)
// router.post("/", middlewares.filmValidation, controllers.createFilm)

module.exports = router;