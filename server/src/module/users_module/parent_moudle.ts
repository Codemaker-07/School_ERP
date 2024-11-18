import mongoose from "mongoose";

const Pair = new mongoose.Schema({
    key: String,
    value: String
});

const Parent = new mongoose.Schema({
    parentid: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    password: {type: String, required: true},
    contactinfo: {type: [Pair], required: true},
    Studentid: {type: String, required: true}
});

const parent_model = mongoose.model("Parent", Parent);

export default parent_model;