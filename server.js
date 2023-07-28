const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const videoThumbnailRouter = require("./routes/videoThumbnail");
const productRouter = require("./routes/product");
const commentRouter = require("./routes/comment");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/videoThumbnails", videoThumbnailRouter);
app.use("/products", productRouter);
app.use("/comments", commentRouter);

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port: ${process.env.PORT || 5000}`);
});
