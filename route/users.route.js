const usersController = require("../controller/users.controller.js")

let express =require("express")

let router =express.Router()

router.get("/",usersController.getAllUsers)
router.get("/getByAccountNumber/:id",usersController.getByAccountNumber)
router.get("/getByidentityNumber/:id",usersController.getByidentityNumber)
router.post("/",usersController.saveUserData)
router.put("/:id",usersController.updateUserData)
router.delete("/:id",usersController.deleteUserData)

module.exports = router