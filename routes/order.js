// routes/order.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const orderController = require("../controllers/order");

// Get user's orders
router.get("/orders", authMiddleware, orderController.getUserOrders);

// Create a new order
router.post("/orders/create", authMiddleware, orderController.createOrder);

module.exports = router;
