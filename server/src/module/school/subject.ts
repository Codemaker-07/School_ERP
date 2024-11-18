import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    subjectid: { type: String, required: true },
    subjectname: { type: String, required: true },
});

const Subject = mongoose.model("Subject", subjectSchema);

export default Subject;