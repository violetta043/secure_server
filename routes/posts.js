const sanitizeHtml = require('sanitize-html');
const express = require('express');
const router = express.Router();

let posts = [
  {
    id: 1,
    category: "Food",
    name: "Apples",
    quantity: 10,
    price: 5,
    description: "Red apples",
  },
  {
    id: 2,
    category: "Tech",
    name: "Mouse",
    quantity: 5,
    price: 20,
    description: "Wireless mouse",
  }
]; 

router.get('/', (req, res) => {
  res.status(200).json(posts);
});

router.post('/', (req, res) => {
  const { category, name, quantity, price, description } = req.body;

  const sanitizedDescription = sanitizeHtml(description, {
    allowedTags: [], //appruve only text
    allowedAttributes: {},
  });

  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    category,
    name,
    quantity,
    price,
    description: sanitizedDescription, // <- sanitized
  };

  posts.push(newPost);
  res.status(201).json({ message: 'Post created', post: newPost });
});

// DELETE post by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(post => post.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }

  const deletedPost = posts.splice(index, 1)[0];
  res.status(200).json({ message: 'Post deleted', post: deletedPost });
});

// PUT (update) post by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { category, name, quantity, price, description } = req.body;

  const index = posts.findIndex(post => post.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }

  const sanitizedDescription = sanitizeHtml(description, {
    allowedTags: [],
    allowedAttributes: {},
  });

  posts[index] = {
    id,
    category,
    name,
    quantity,
    price,
    description: sanitizedDescription, 
  };

  res.status(200).json({ message: 'Post updated', post: posts[index] });
});


module.exports = router;
