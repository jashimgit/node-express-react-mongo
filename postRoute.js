const router = require('express').Router();
const {
    getAllPost,
    getSinglePost,
    createNewPost,
    updatePost,
    deletePost,
} = require('./postController');
// example.com/posts GET
router.get('/', getAllPost);

// example.com/post/:postId  GET
router.get('/:postId', getSinglePost);

// example.com/posts POST
router.post('/', createNewPost);

// example.com/posts/:postId PUT
router.put('/:postId', updatePost);

// example.com/posts/:postId DELETE
router.delete('/:postId', deletePost);
module.exports = router;
