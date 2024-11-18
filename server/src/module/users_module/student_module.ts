import mongoose from "mongoose";


const Pair = new mongoose.Schema({
    key: String,
    value: String
});

const studentSchema = new mongoose.Schema({
    admissionid:{ type: String, required: true },
    admissiondate:{ type: Date, required: true },
    firstname:{ type: String, required: true },
    lastname:{ type: String, required: true },
    password:{ type: String, required: true },
    age:{ type: Number, required: true },
    gender:{ type: String, required: true },
    parentid:{ type: String, required: true },
    classid:{ type: String, required: true },
    address:{ type: String, required: true },
    contactinfo: { Array:[{type: Pair}]},
});

const Student = mongoose.model("Student", studentSchema);

export default Student;