import { parent_login_controller } from "../controller/parent_controller";
import { Router } from "express";
import parent_token_verify from "../middleware/parent_token_verify";

const parent_router = Router();

parent_router.post("/login" , parent_login_controller);
parent_router.get("/logout", parent_token_verify, (req, res) => {
    res.status(200).json({ message: "Logged out successfully" });
});

export default parent_router;