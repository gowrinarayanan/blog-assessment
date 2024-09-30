const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Blog schema
const blogSchema = new Schema({
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const Blog = mongoose.model("Blog", blogSchema);


module.exports = Blog;