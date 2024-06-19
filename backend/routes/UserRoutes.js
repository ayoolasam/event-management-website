const express = require("express");
const {isAuthenticatedUser} = require("../middleware/ValidateToken")

const { register ,login,getMe} = require("../controllers/UserController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me",isAuthenticatedUser,getMe )

module.exports = router;
