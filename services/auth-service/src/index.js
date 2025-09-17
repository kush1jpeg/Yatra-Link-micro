// auth-service/index.js
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple mock auth
  if (username === 'user1' && password === 'pass1') {
    return res.json({ status: 'ok', message: 'Auth successful' });
  }
  return res.status(401).json({ status: 'error', message: 'Invalid credentials' });
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Auth service running on ${PORT}`));
