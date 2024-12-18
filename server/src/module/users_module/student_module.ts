import mongoose, {Schema, Types } from "mongoose";
const StudentSchema:Schema = new Schema({
    admissionId: {type:String,required:true},
    admissionDate:{type:Date,required:true},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    password:{ type: String, required: true },
    age: {type:Number,required:true},
    gradeId:{type:String,required:true},
    gender:{type:String,required:true},
    parentId:{type:Schema.Types.ObjectId,ref:'Parent',required:true},
    classId:{type:Schema.Types.ObjectId,ref:'Class',required:true},
    address:{type:String,required:true},
    contactInfo:{type:String,required:true},
});
const Student = mongoose.model('Student',StudentSchema);
export default Student;