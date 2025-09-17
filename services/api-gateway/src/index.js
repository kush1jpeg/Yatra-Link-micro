// api-gateway/index.js
import express from 'express';
import fetch from 'node-fetch'; // Node 18+ has fetch by default
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

// Endpoint to login user and forward to passenger-service
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Call auth-service first
  const authResp = await fetch('http://auth-service:5001/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!authResp.ok) {
    return res.status(401).json({ status: 'error', message: 'Auth failed' });
  }

  // Auth successful → forward to passenger-service
  const passengerResp = await fetch('http://passenger-service:5008/validate-user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await passengerResp.json();
  return res.json({ status: 'ok', message: 'User validated', passengerData: data });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`API Gateway running on ${PORT}`));
