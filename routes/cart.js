// routes/cart.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const cartController = require("../controllers/cart");

// Get user's cart
router.get("/cart", authMiddleware, cartController.getUserCart);

// Add product to cart
router.post("/cart/add", authMiddleware, cartController.addToCart);

// Remove product from cart
router.delete(
  "/cart/remove/:productId",
  authMiddleware,
  cartController.removeFromCart
);

module.exports = router;
