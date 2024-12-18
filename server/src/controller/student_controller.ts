import { Request, Response } from "express";
import { student_signup_service, student_login_service,student_delete_service,student_update_service} from "../service/student_service";
export const signupStudent= (req:Request,res:Response):void =>{
    student_signup_service(req,res);
}
export const loginStudent = async(req:Request,res:Response): Promise<void> =>{
    await student_login_service(req,res);
}
export const updateStudent = async(req:Request,res:Response): Promise<void> =>{
    await student_update_service(req,res);
}
export const delStudent = async(req:Request,res:Response): Promise<void> =>{
    await student_delete_service(req,res);
}