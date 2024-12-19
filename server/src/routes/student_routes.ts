import { Router } from "express";
import { signupStudent,loginStudent,updateStudent,delStudent } from "../controller/student_controller";
import studentTokenVerify from "../middleware/student_token_verify";
const route = Router();
route.post("/signup", signupStudent);
route.post("/login",loginStudent);
route.put("/update",studentTokenVerify, updateStudent);
route.delete("/delete",studentTokenVerify, delStudent);
export default route;