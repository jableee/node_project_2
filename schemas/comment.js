const mongoose = require("mongoose");

const commentSchemas = new mongoose.Schema({
    commentId: {
        type: Number,
        required: true,
        unique: true
    },
    postId: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Comment", commentSchemas);