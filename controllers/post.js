const Post = require('../models/post');

exports.getPosts = async (req, res, next) => {
    const { page = 1, limit = 2, searchedField = "" } = req.query;
    const users = await Post.find({ name: { $regex: searchedField, $options: '$i' } })
        .select("_id name city contact company")
        .sort({ name: -1 })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .then((users) => {
            res.json({ total: users.length, users });
        })
        .catch(err => console.log(err))
}

exports.createUser = (req, res) => {
    const post = new Post(req.body)
    console.log("Creating Post: ", req.body);
    post.save().then(result => {
        res.json({
            post: result
        });
    });
};