import jwt from "jsonwebtoken";

const secret = 'student_secret'; 

const generateToken = (payload: any) => {
  return jwt.sign(payload, secret);
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