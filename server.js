// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const port = 8000;

// // Middleware
// const sharpImageMiddleware = require("./middleware/sharpImageMiddleware");
// const bodyParserMiddleware = require("./middleware/bodyParserMiddleware");

// // Routes
// const indexRoute = require("./routes/index");
// const productRoutes = require("./routes/product");
// const uploadRoute = require("./routes/upload");

// // Connect to MongoDB
// mongoose.connect(
//   "",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// // Use Middleware
// app.use(bodyParserMiddleware);
// app.use(sharpImageMiddleware);

// // Use Routes
// app.use("/", indexRoute);
// app.use("/api", productRoutes);
// app.use("/api/upload", uploadRoute);

// // Start server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
