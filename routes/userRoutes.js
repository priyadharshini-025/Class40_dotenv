const express = require("express");

const router = express.Router();

const userController = require("../controller/userController")

//post api route
router.post("/users",userController.createUser)

//get api route
router.get("/getUsers",userController.getUsers)

module.exports = router