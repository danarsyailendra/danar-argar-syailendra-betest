const tokenController = require("../controller/token.controller.js")

let express =require("express")

let router =express.Router()

router.get("/",tokenController.generateToken)

module.exports = router