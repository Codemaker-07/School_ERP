import { promises } from "dns";
import Grades from "../module/school/grades";
async function add_grade(gradeData:any):Promise<any> {
    try{
        const grade = new Grades(gradeData);
        return await grade.save();
    }
    catch(error){
        console.log("errror in adding grades", error);
        throw new Error("error adding grades");
    }
}
async function get_grade_by_id(gradeId: String):Promise<any> {
    try{
        return await Grades.findOne({gradeId});
    }
    catch(error){
        console.log("error in getting gradeid",error);
        throw new Error("error in getting gradeid")
    }
}
async function update_grade(gradeId: String,updateData : any):Promise<any> {
    try{
        return await Grades.findOneAndUpdate({gradeId},updateData,{new:true});
    }
    catch(error){
        console.log("error in updating the grades",error);
        throw new Error("error in updating data");
    }
}
async function delete_grade(gradeId:String):Promise<any> {
    try{
        return await Grades.findOneAndDelete({gradeId});
    }
    catch(error){
        console.log("error in deleting data",error);
        throw new Error("error in deleting")
    }
}
export{add_grade,get_grade_by_id,update_grade,delete_grade};