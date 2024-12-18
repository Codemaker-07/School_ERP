import { error } from "console";
import { add_student, get_by_admissionId,delete_student,update_student } from "../dal/student_dal";
function student_signup_service(req:any,res:any):any{
    if(validate_student(req.body)){
        return add_student(req,res)
    }else{
        console.log("request body is invalid");
        res.status(400).json({error:"request body is invalid"});
        return;
    }
}
async function student_login_service(req:any,res:any):Promise<any>{
    const { admissionId,password } = req.body;
    if(validate_student_login(req.body)){
        const student = await get_by_admissionId(admissionId);
        if(!student){
            console.log("student does not exist");
            res.status(404).json({error:"studnet does not exist"});
            return;
        }
        const storedPassword = student.password;
        if(storedPassword != password){
            console.log("Incorrect password");
            res.status(400).json({ error: "Incorrect password" });
        }
        else{
            console.log("student logged in successfully");
            res.status(200).json({message:"logged in successfully",student});
        }
    }else{
        console.log("Request body is missing or invalid");
        res.status(400).json({ error: "Request body is missing or invalid" });
        return;
    }
}
async function student_update_service(req:any,res:any): Promise<any> {
    if(validate_student(req.body)){
        try{
            const student = await get_by_admissionId(req.body.admissionId);
            if(!student){
                console.log("student does not exist");
                res.status(404).json({error:"studnet does not exist"});
                return;
            }
            return update_student(req,res);
        }catch(error){
            console.log("( X ) Error updating student:", error);
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }
    }
    else{
        console.log("Request body is missing or invalid");
        res.status(400).json({ error: "Request body is missing or invalid" });
        return;
    }
}
async function student_delete_service(req:any,res:any): Promise<any> {
    const {admissionId} = req.body;
    if(!admissionId){
        console.log("admissionid is required");
        res.status(400).json({ error: "admissionid is required"});
        return;
    }
    try{
        const deleteStudent = await delete_student(admissionId);
        if(!deleteStudent){
            console.log("student not found with admissionid",admissionId);
            res.status(400).json({ error: "student not found"});
            return;
            //400-bad error
        }
        console.log("Studemt deleted successfully");
        res.status(200).json({ message: "Student deleted successfully", student: deleteStudent });
        return;
    }catch(error){
        console.log("error during student deletion",error);
        res.status(500).json({ error: "Internal server error"});
        return;
    }
}
function validate_student_login(data:any):boolean{
    return data && data.admissionId && data.password;
}
function validate_student(data:any):boolean{
    if(!data){
        return false;
    }
    const requiredFields=[
        "admissionId",
        "admissionDate",
        "firstName",
        "lastName",
        "password",
        "age",
        "gradeId",
        "gender",
        "parentId",
        "classId",
        "address",
        "contactInfo",
    ];
    for(const field of requiredFields){
        if(!data[field]){
            console.log(`( X ) Missing field: ${field}`);
            return false;
        }
    }
    return true;
}
export {
    student_signup_service,
    student_login_service,
    student_update_service,
    student_delete_service,
};