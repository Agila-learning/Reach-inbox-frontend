const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  // Get token from request headers, query parameters, or cookies
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Token not provided' });
  }

  try {
    // Verify JWT token
    const decoded = jwt.verify(token, 'secret_key');
    req.user = decoded.user; // Attach user information to request object
    next(); // Proceed to next middleware
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

// Protected endpoint - requires authentication
app.get('/onebox/list', verifyToken, (req, res) => {
  // Endpoint logic to fetch onebox data
  res.json({ message: 'Onebox data fetched successfully' });
});

// Other endpoints and middleware can be similarly protected

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
