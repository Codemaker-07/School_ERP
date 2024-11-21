import { add_admin , get_by_id , update_admin , delete_admin} from "../dal/admins";
import { generateToken } from "../utils/token";

function admin_signup_service(req: any, res: any): any {
    if (check_input(req.body)){
        return add_admin(req, res);
    }else{
        console.log(" ( X ) Request body is undefined");
        res.status(400).json({ error: 'Request body is missing' });
        return;
    }
}

async function admin_login_service(req: any, res: any): Promise<any> {
    const {adminid , password} = req.body;

    if (check_input_login(req.body)){
        const admin_ob = await get_by_id(adminid);
        if (!admin_ob) {
            console.log("Admin does not exist");
            res.status(400).json({ error: 'Admin does not exist' });
            return;
        }

        const pass = admin_ob.password;
        if (pass !== password) {
            console.log("Incorrect password");
            res.status(400).json({ error: 'Incorrect password' });
        } else {
            console.log("Admin logged in successfully");
            const token = generateToken({ adminid: admin_ob.adminid }); // Assuming the token needs admin ID
            res.json({ token });
        }
    }else {
        console.log(" ( X ) Request body is undefined");
        res.status(400).json({ error: 'Request body is missing' });
        return;
    }
}

async function admin_update_service(req: any, res: any): Promise<any> {
    if (check_input(req.body)) {
        try {
            const existingAdmin = await get_by_id(req.body.adminid);
            if (existingAdmin) {
                req.body.adminid = existingAdmin._id;
                return update_admin(req, res);
            } else {
                console.log(" ( X ) Admin not found");
                res.status(404).json({ error: 'Admin not found' });
                return;
            }
        } catch (error) {
            console.log(" ( X ) Error fetching admin", error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
    }else{
        console.log(" ( X ) Request body is undefined");
        res.status(400).json({ error: 'Request body is missing' });
        return;
    }
}

async function admin_delete_service(req: any, res: any): Promise<any> {
    try {
        const adminid = req.body.adminid;
        
        const data = delete_admin(adminid); 

        if (!data) {
            console.log("Admin not found with adminid:", adminid);
            return res.status(404).json({ error: 'Admin not found' });
        }

        console.log("Admin deleted");
        res.status(200).json({ message: 'Admin deleted successfully', data });
        return;

    } catch (error) {
        console.log("Error during admin deletion:", error);
        res.status(500).json({ error: 'Error while deleting admin' });
        return;
    }
    
}



function check_input_login(data: any): boolean{
    data.name = "*";
    data.contactinfo = "*";
    return check_input(data);
}
function check_input(data : any):boolean{
    if(data){
        if(!data.adminid){
            console.log(" ( X ) Missing adminid");
            return false;
        }
        if(data.name != "*"){
            if(!data.name ){
                console.log(" ( X ) Missing name");
                return false;
            }
        }
        
        if(!data.password){
            console.log(" ( X ) Missing password");
            return false;
        }
        if (data.contactinfo == "*"){
            if(!data.contactinfo){
                console.log(" ( X ) Missing contactinfo");
                return false;
            }
        }
        return true;
    }
    return false;
}
export { admin_signup_service , admin_login_service ,admin_update_service ,admin_delete_service};
