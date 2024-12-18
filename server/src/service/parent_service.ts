import { getParent, addParent, updateParent, deleteParent } from './../dal/users_dal/parent';
import { generateToken } from "../utils/parent_token";

async function parent_signup(req: any, res: any): Promise<any> {
    try {
        const existingParent = await getParent(req.body.parentid);
        if (existingParent) {
            res.status(400).json({ message: "Parent already exists" });
            return false;
        }

        await addParent(req.body);
        res.status(200).json({
                message: "Parent added successfully"
        })
        return true;
        
    } catch (error) {
        res.status(400).json({ message: error });
        return false;
    }
}

async function parent_update(req: any, res: any): Promise<void> {
    try {
        const existingParent = await getParent(req.body.parentid);
        if (!existingParent) {
            res.status(400).json({ message: "Parent does not exist" });
            return;
        }

        await updateParent(existingParent._id, req.body);
        res.status(200).json({
            message: "Parent updated successfully"
        });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

async function parent_delete(req: any, res: any): Promise<void> {
    try {
        const existingParent = await getParent(req.body.parentid);
        if (!existingParent) {
            res.status(400).json({ message: "Parent does not exist" });
            return;
        }

        await deleteParent(existingParent._id);
        res.status(200).json({
            message: "Parent deleted successfully"
        });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

async function parent_login(req: any, res: any): Promise<void> {
        const {parentid , password} = req.body;
    
        const parent_ob = await getParent(parentid);
        if (!parent_ob) {
            console.log("parent does not exist");
            res.status(400).json({ error: 'parent does not exist' });
            return;
        }

        const pass = parent_ob.password;
        if (pass !== password) {
            console.log("Incorrect password");
            res.status(400).json({ error: 'Incorrect password' });
        } else {
            console.log("parent logged in successfully");
            const token = generateToken({ parentid: parent_ob.parentid });
            res.status(200).json({ token });
        }
    
}

export { parent_delete, parent_signup, parent_update ,parent_login};
