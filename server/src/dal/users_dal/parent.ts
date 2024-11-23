import parent from "../../module/users_module/parent_moudle";

async function getParent(parentid: string): Promise<any> {
    const existingParent = await parent.findOne({ parentid });

    if (!existingParent) {
        return null;  
    } else {
        return existingParent;
    }
}

async function addParent(data: any): Promise<any> {
    try {
        const newParent = new parent(data);
        const result = await newParent.save();
        return result;
    } catch (error) {
        return null;
    }
}

async function updateParent(id: string, data: any): Promise<any> {
    try {
        const result = await parent.findByIdAndUpdate(id, data, { new: true });
        return result;
    } catch (error) {
        return null;
    }
}

async function deleteParent(id: string): Promise<any> {
    try {
        const result = await parent.findByIdAndDelete(id);
        return result;
    } catch (error) {
        return null;
    }
}

export { getParent, addParent, updateParent, deleteParent };
