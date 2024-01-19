// routes/user.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const userController = require("../controllers/user");

// Get user profile
router.get("/profile", authMiddleware, userController.getUserProfile);

// Update user profile
router.put("/profile/update", authMiddleware, userController.updateUserProfile);

module.exports = router;
