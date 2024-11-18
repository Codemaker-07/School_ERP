import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
    classname: { type: String, required: true },
    classid: { type: String, required: true },
    teacher: { type: String, required: true },
    students : [{ type: String, required: true }],
    timetable: [{ type: String, required: true }],
    attendance: [{ type: String, required: true }],
    syllabus: { type: String, required: true },
});

const Class = mongoose.model("Class", ClassSchema);

export default Class;