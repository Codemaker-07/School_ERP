import mongoose from "mongoose";

const Pair = new mongoose.Schema({
    key: String,
    value: String
});

const teacherSchema = new mongoose.Schema({
    id : {type: String,required: true,unique: true},
    firstname: {type: String,required: true,},
    lastname: {type: String,required: true,},
    password: {type: String,required: true},
    gender :{type: String,required: true},
    subject: {type: String,required: true},
    classid: {type: String,required: true},
    contactinfo: { Array:[{type: Pair}]},
});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;