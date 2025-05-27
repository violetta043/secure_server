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


router.post('/', (req, res) => {
  const { category, name, quantity, price, description } = req.body;
  

router.get('/', (req, res) => {
  res.status(200).json(posts);
});


  const newPost = {
    id: posts.length + 1,
    category,
    name,
    quantity,
    price,
    description,
  };

  posts.push(newPost); // Додавання поста до сховища

  res.status(201).json({ message: 'Пост створено', post: newPost });
});

module.exports = router;
