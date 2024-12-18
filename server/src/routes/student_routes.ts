import { Router } from "express";
import { signupStudent,loginStudent,updateStudent,delStudent } from "../controller/student_controller";
const route = Router();
route.post("/signup", signupStudent);
route.post("/login", loginStudent);
route.put("/update", updateStudent);
route.delete("/delete", delStudent);
export default route;