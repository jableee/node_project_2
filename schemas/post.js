const mongoose = require("mongoose");

const postSchemas = new mongoose.Schema({
    postId: {
        type: Number,
        required: true,
        unquie: true,
    },
    title: {
        type: String,
        required: true,
    }, 
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Post", postSchemas);