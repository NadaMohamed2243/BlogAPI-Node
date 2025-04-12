const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const { authenticate } = require('../middleware/auth');
router.use(authenticate);
// get all posts
router.get('/', postsController.GetAllPosts);

// get post by id
router.get('/:id', postsController.GetPostById);

// create post
router.post('/', postsController.CreatePost);

// update post
router.put('/:id', postsController.UpdatePost);

// delete post
router.delete('/:id', postsController.DeletePost);

// POST add a comment to a post
router.post('/:id/comments', postsController.AddCommentToPost);

// GET all posts by a specific user
router.get('/user/:userId', postsController.GetPostsByUser);

// POST like a post
router.post('/:id/like', postsController.LikePost);


module.exports = router;