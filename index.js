const express = require('express');
// const postRoute = require('./postRoute');
// const userRoute = require('./loginRoute');

const app = express();
const port = process.env.PORT || 8000;

console.log(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/about/:key', (req, res) => {
    console.log(req.params.key);
    res.send('<h1> I am about page </h1>');
});

// post route

/** router parametter

	app.get('/products/:id', (req, res) => {
     res.send(req.params.id);
 	});
*/
// Implement our custom routen
// app.use('/posts', postRoute);
// app.use('/user', userRoute);

// // send json
app.get('/json', (req, res) => {
    res.json({ message: 'i am json ' });
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express JS </h1>');
});

// Routes
// controller
// contact object

app.get('*', (req, res) => {
    res.send('<h1>404 !! not found</h1>');
});

app.listen(port);
