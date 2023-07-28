const express = require('express');
const Comment = require('../models/comment.model');

const router = express.Router();

// GET: Fetch all comments of a video
router.get('/:videoId', async (req, res) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST: Create a new comment
router.post('/', async (req, res) => {
  const comment = new Comment({
    username: req.body.username,
    comment: req.body.comment,
    videoId: req.body.videoId,
  });

  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
