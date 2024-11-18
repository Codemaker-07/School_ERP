import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
    gradeid : { type: String, required: true },
    StudentName : { type: String, required: true },
    SubjectName : { type: String, required: true },
    Grade : { type: String, required: true },
    class : { type: String, required: true },
});

const Grades = mongoose.model("Grades", gradeSchema);

export default Grades;