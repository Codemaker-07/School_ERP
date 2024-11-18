import mongoose from "mongoose";

const PairSchema = new mongoose.Schema({
    key: { type: String },
    value: { type: String }
});

const AdminSchema = new mongoose.Schema({
    adminid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    contactinfo: [PairSchema]
});

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;
