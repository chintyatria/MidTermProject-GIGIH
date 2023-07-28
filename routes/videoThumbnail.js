const express = require("express");
const VideoThumbnail = require("../models/videoThumbnail.model");

const router = express.Router();

// GET: Fetch all video thumbnails
router.get("/", async (req, res) => {
  try {
    const videoThumbnails = await VideoThumbnail.find();
    res.json(videoThumbnails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST: Create a new video thumbnail
router.post('/', async (req, res) => {
  const videoThumbnail = new VideoThumbnail({
    videoId: req.body.videoId,
    urlImage: req.body.urlImage,
  });

  try {
    const newVideoThumbnail = await videoThumbnail.save();
    res.status(201).json(newVideoThumbnail);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
