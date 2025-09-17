// passenger-service/index.js
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

app.post('/store', (req, res) => {
  const { username, password } = req.body;

  // Simulate passenger service check
  console.log('Storage service received:', username, password);

  // Respond back
  return res.json({ status: 'ok', passenger: username });
});

const PORT = 5003;
app.listen(PORT, () => console.log(`Storage service running on ${PORT}`));
