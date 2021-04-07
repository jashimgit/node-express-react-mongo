/* eslint-disable no-unused-vars */
exports.getAllPost = (req, res) => {
    const { category } = req.query;
    res.send('<h1>Render all post</h1>');
};
exports.getSinglePost = (req, res) => {
    res.send('<h2>Single post </h2>');
};
exports.createNewPost = (req, res) => {
    res.send('<h1>Create new post</h1>');
};

exports.updatePost = (req, res) => {
    res.send('<h1>Update your existing post');
};

exports.deletePost = (req, res) => {
    res.send('<h2>Delete your existing post</h2>');
};
