import { add_grade_service,get_grade_service,update_grade_service,delete_grade_service } from "../service/grades_service";
import { Request,Response } from "express";
export const addGrade = async(req:Request,res:Response):Promise<void> =>{
    await add_grade_service(req,res);
}
export const getGrade = async (req:Request,res:Response):Promise<void> => {
    await get_grade_service(req,res);
}
export const updateGrade = async (req:Request,res:Response):Promise<void> => {
    await update_grade_service(req,res);
}
export const deleteGrade = async (req:Request,res:Response):Promise<void> => {
    await delete_grade_service(req,res);
}