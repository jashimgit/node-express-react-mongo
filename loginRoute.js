const router = require('express').Router();
// extract routeer from express
router.get('/login', (req, res) => {
    res.send('<h1>I am login route</h1>');
});

router.get('/logout', (req, res) => {
    res.send('<h1>I am logout route</h1>');
});

router.get('/signup', (req, res) => {
    res.send('<h1>I am signup route</h1>');
});

module.exports = router;
