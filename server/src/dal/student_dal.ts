import Student from "../module/users_module/student_module";
import { Types } from "mongoose";
async function get_by_admissionId(admissionId:String):Promise<any> {
    const existingStudent = await Student.findOne({admissionId})
    if(!existingStudent){
        console.log("student not found",admissionId);
        return null;      
    }else{
        console.log("Student found with admissionid",admissionId);
        return existingStudent;
        
    }
}
    async function add_student(req:any,res:any):Promise<void> {
            try {
                const {
                    admissionId,
                    admissionDate,
                    firstName,
                    lastName,
                    age,
                    gradeId,
                    gender,
                    parentId,
                    classId,
                    address,
                    contactInfo,
                    password,
                } = req.body;
        
                const new_student = new Student({
                    admissionId,
                    admissionDate,
                    firstName,
                    lastName,
                    age,
                    gradeId,
                    gender,
                    parentId,
                    classId,
                    address,
                    contactInfo,
                    password,
                });
        
                console.log("Adding new student:", new_student.firstName, " ID:", new_student.admissionId);
                await new_student.save();
                console.log("New student added successfully");
                res.status(200).json({ message: "Student created successfully" });
            } catch (error) {
                console.log("Error during student creation:", error);
                res.status(400).json({ error: "Error while creating student" });
            }
        }
async function update_student(req:any,res:any):Promise<void> {
    try{
        const {admissionId, ...updateData} = req.body
        if(!admissionId){
            console.log("id not provided");
            return res.status(400).json({ error: "Admission ID is required" });
        }
        const data = await Student.findOneAndUpdate({admissionId},updateData,{new:true})
        if(!data){
            console.log("student not found with admissionid",admissionId);
            return res.status(404).json({ error: "Student not found" });
        }
        console.log("Student updated:",data);
        res.status(200).json(data);
    }catch(error){
        console.log("Error during student update:", error);
        res.status(400).json({ error: "Error while updating student" });
    }
}
async function delete_student(admissionId:String):Promise<any> {
    try{
        const deletedStudent = await Student.findOneAndDelete({admissionId})
        if (!deletedStudent) {
            console.log("Student not found with admission ID:", admissionId);
            return null;
        }
        console.log("Student deleted with admission ID:", admissionId);
        return deletedStudent;
    }catch(error){
        console.log("error during deleting",error);
        throw new Error("error while deleting")
    }
    
}
export { add_student, get_by_admissionId, update_student, delete_student };