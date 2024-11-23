import Admin from "../module/admin_module/admin_module";
import mongoose from "mongoose";

async function get_by_id(adminid : string):Promise<any>{
    const existingAdmin = await Admin.findOne({ adminid });

    if (!existingAdmin) {
        return false;
    } else {
        return existingAdmin;
    }
}

async function add_admin(req: any, res: any): Promise<void> {
    try {
        const { adminid, name, password, contactinfo } = req.body;

        const new_admin = new Admin({
            adminid,
            name,
            password,
            contactinfo
        });
        console.log("Adding new admin:", new_admin.name, " id:" ,new_admin.adminid);
        await new_admin.save();
        console.log("New admin added successfully");
        res.status(200).json({ message: 'Admin created successfully' });
    } catch (error) {
        console.log("Error during admin creation:", error);
        res.status(400).json({ error: 'Error while creating admin' });
    }
}

async function update_admin(req: any, res: any): Promise<any> {
      
    try {
        const { adminid, ...updateData } = req.body;

        if (!mongoose.Types.ObjectId.isValid(adminid)) {
            console.log("Invalid adminid:", adminid);
            return res.status(400).json({ error: 'Invalid adminid' });
        }

        const data = await Admin.findByIdAndUpdate(adminid, updateData, { new: true });
        if (!data) {
            console.log("Admin not found with id:", adminid);
            return res.status(404).json({ error: 'Admin not found' });
        }

        console.log("Admin updated:", data);
        res.status(200).json(data);
        
    } catch (error) {
        console.log("Error during admin update:", error);
        res.status(400).json({ error: 'Error while updating admin' });
    }

}

async function delete_admin(adminid :string):Promise<any> {
    return await Admin.findOneAndDelete({ adminid });   
}

export { add_admin , get_by_id ,update_admin , delete_admin};
