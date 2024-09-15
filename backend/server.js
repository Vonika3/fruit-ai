const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000;
const users = {}; // This will act as an in-memory store; use a database in a real app

app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const { userId, password } = req.body;
  if (users[userId]) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const hashedPassword = bcrypt.hashSync(password, 10);
  users[userId] = hashedPassword;
  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/login', (req, res) => {
  const { userId, password } = req.body;
  const hashedPassword = users[userId];
  if (!hashedPassword || !bcrypt.compareSync(password, hashedPassword)) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ userId }, 'your_jwt_secret', { expiresIn: '1h' });
  res.json({ token });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
