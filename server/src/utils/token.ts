const jwt = require('jsonwebtoken');

const secret = 'your_jwt_secret'; // Use a strong secret for production

const generateToken = (payload: object) => {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded; // Return the decoded payload if verification is successful
  } catch (error) {
    return false; // Return null if verification fails
  }
};

export { generateToken, verifyToken };
