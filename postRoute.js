const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('<h1>Render all post</h1>');
});
router.post('/', (req, res) => {
    res.send('<h1>Create new post</h1>');
});
module.exports = router;
