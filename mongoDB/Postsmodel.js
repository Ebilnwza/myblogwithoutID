const mongoose = require('mongoose');
mongoose.set('strictQuery',true)
const blogPostSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
