const express = require('express');
const postRoute = require('./postRoute');

const app = express();
const port = process.env.PORT || 8080;

app.get('/about', (req, res) => {
    res.send('<h1> I am about page </h1>');
});
// post route

app.use('/posts', postRoute);

// custom route
const router = express.Router(); // extract routeer from express
router.get('/login', (req, res) => {
    res.send('<h1>I am login route</h1>');
});

router.get('/logout', (req, res) => {
    res.send('<h1>I am logout route</h1>');
});

router.get('/signup', (req, res) => {
    res.send('<h1>I am signup route</h1>');
});

// custom route

// Implement our custom route

app.use('/user', router);

// send json
app.get('/json', (req, res) => {
    res.json({ message: 'i am json ' });
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express JS </h1>');
});
app.get('*', (req, res) => {
    res.send('<h1>404 !! not found</h1>');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
