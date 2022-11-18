const express = require("express")
const router = express.Router()
const tattoosController = require("../controllers/tattoos.controller")

router.post("/", tattoosController.create)
router.get("/", tattoosController.find)
router.get("/:id", tattoosController.findOne)
router.put("/:id", tattoosController.update)
router.delete("/:id", tattoosController.remove)

module.exports = router