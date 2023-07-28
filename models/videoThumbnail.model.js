const mongoose = require("mongoose");

const videoThumbnailSchema = new mongoose.Schema({
  videoId: { type: String, required: true },
  urlImage: { type: String, required: true },
});

const VideoThumbnail = mongoose.model("VideoThumbnail", videoThumbnailSchema);

module.exports = VideoThumbnail;
