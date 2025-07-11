const express = require("express");
const router = express.Router();
const authController = require("../controllers/AuthUser");
const { authMiddleware } = require("../middleware/auth-middleware");

router.post("/login", authController.loginUser);
router.post("/signup", authController.addNewUser);
router.delete("/delete", authMiddleware, authController.deleteUser);

module.exports = router;