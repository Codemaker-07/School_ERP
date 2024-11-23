import { verifyToken } from "../utils/parent_token";

const parentTokenVerify = (req: any, res: any, next: any) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ error: "Invalid token" });
    }

    req.body.parent = decoded;
    next();
};

export default parentTokenVerify;
