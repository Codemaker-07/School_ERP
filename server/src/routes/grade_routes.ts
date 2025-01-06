import { Router } from "express";
import { addGrade,getGrade,updateGrade,deleteGrade } from "../controller/grades_controller";
const gradeRoute = Router();
gradeRoute.post("/add",addGrade);
gradeRoute.get("/get",getGrade);
gradeRoute.put("/update",updateGrade);
gradeRoute.delete("/delete",deleteGrade);
export default gradeRoute;