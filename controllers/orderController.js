// controllers/order.js
const Order = require("../models/Order");

// Get user's orders
exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ user: userId }).populate(
      "products.product"
    );
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const { products } = req.body;

    const order = new Order({ user: userId, products });
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
