const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8000;

// Middleware
const sharp = require("sharp");

app.use(express.json());

app.use("/images", (req, res, next) => {
  // Use sharp to resize and optimize images
  sharp(`images${req.url}`)
    .resize(300, 200) // Adjust the dimensions as needed
    .toBuffer()
    .then((data) => {
      res.set("Content-Type", "image/jpeg"); // Adjust content type based on your images
      res.send(data);
    })
    .catch((err) => {
      next(err);
    });
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello, API!");
});

const productRoutes = require("./routes/product");
app.use("/api", productRoutes);

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// Example route for handling image uploads
app.post("/api/upload", upload.single("image"), (req, res) => {
  // Process the uploaded image, store its path in the database, etc.
  const imagePath = `uploads/${req.file.filename}`;
  res.json({ imagePath });
});

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://fortunechinenyem:ecommerceapi@cluster0.t8n0ius.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
