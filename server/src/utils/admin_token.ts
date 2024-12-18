import jwt from 'jsonwebtoken';

const secret = 'admin_secret'; 

const generateToken = (payload: any) => {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded; 
  } catch (error) {
    return false;
  }
};

export { generateToken, verifyToken };
