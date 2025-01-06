import { add_grade,get_grade_by_id,update_grade,delete_grade } from "../dal/grades";
function validate_grade(data:any):boolean{
    const requiredFields = ["gradeid", "StudentName", "SubjectName", "Grade", "class"];
    return requiredFields.every((field) => field in data && data[field]);
}
async function add_grade_service(req:any,res:any):Promise<void> {
    if(validate_grade(req.body)){
        try{
            const grade =  await add_grade(req.body);
            res.status(201).json({message:"gradde added sucessfully",grade});
        }catch(error){
            console.log("error in adding grade");
            res.status(500).json({error:"error in adding grade"});
        }
    }
    else{
        console.log("Invalid input data");
        res.status(400).json({error:"Invalid input data"});
    }
}
async function get_grade_service(req:any,res:any):Promise<void> {
    const {gradeId} = req.params;
    try{
        const grade = await get_grade_by_id(gradeId);
        if(!grade){
            res.status(400).json({error:"error in getting grade"});
        }else{
            res.status(200).json(grade);
        }
    }catch(error){
        console.log("error in getting grade",error);
        res.status(500).json({error:"error in getting grade"});
    }
}
async function update_grade_service(req:any,res:any):Promise<void>{
    const gradeId = req.params;
    if(validate_grade({...req.body,gradeId})){
        try{
            const updateGrade = await update_grade(gradeId,req.body);
            if(!updateGrade){
                res.status(400).json({error:"error in updating grade"});
            }else{
                res.status(200).json({message:"grade updated successfully",updateGrade});
            }
        }catch(error){
            console.error("Error updating grade:", error);
            res.status(500).json({ error: "Error updating grade" });
        }
    }else{
        console.log("Invalid input data");
        res.status(400).json({error:"Invalid input data"});
    }
}
async function delete_grade_service(req:any,res:any):Promise<void> {
    const gradeId = req.params;
    if(validate_grade({...req.body,gradeId})){
        try{
            const deleteGrade = await delete_grade(gradeId);
            if(!deleteGrade){
                res.status(400).json({error:"error in deleting grade"})
            }else{
                res.status(200).json({message:"grade deletd successfully", deleteGrade});
            }
        }catch(error){
            console.error("Error in deleting the grade",error);
            res.status(500).json({error:"error in deleting"})
        }
    }else{
        console.log("invalid input data");
        res.status(400).json({error:"invalid input  data"})
    }
}
export{add_grade_service,get_grade_service,update_grade_service,delete_grade_service}