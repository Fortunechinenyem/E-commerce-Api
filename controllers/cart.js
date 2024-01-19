// controllers/cart.js
const Cart = require("../models/Cart");

// Get user's cart
exports.getUserCart = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have authentication middleware
    const cart = await Cart.findOne({ user: userId }).populate(
      "products.product"
    );
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Add product to cart
exports.addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.body;

    // Check if product is already in the cart, update quantity if exists, otherwise add to cart
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({
        user: userId,
        products: [{ product: productId, quantity }],
      });
    } else {
      const existingProduct = cart.products.find((item) =>
        item.product.equals(productId)
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        cart.products.push({ product: productId, quantity });
      }
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Remove product from cart
exports.removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.params;

    const cart = await Cart.findOne({ user: userId });

    if (cart) {
      cart.products = cart.products.filter(
        (item) => !item.product.equals(productId)
      );
      await cart.save();
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
