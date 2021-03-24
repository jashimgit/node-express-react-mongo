const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('<h1>Render all post</h1>');
});
router.post('/', (req, res) => {
    res.send('<h1>Create new post</h1>');
});

router.put('/', (req, res) => {
    res.send('<h1>Update your existing post');
});

router.delete('/', (req, res) => {
    res.send('<h2>Delete your existing post</h2>');
});
module.exports = router;
