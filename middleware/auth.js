// Simple authentication using API key in headers
const authenticate = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const validKey = 'mysecretkey';
  if (apiKey !== validKey) {
    return res.status(401).json({ error: 'Unauthorized: Invalid API key' });
  }
  next();
};

module.exports = authenticate;
