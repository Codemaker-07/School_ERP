import { AnyArray } from "mongoose";
import { parent_signup , parent_update , parent_delete, parent_login } from "../service/parent_service";

function parent_signup_controller(req :any, res : any):any {
    return parent_signup(req,res);
}

function parent_update_controller(req :any, res : any):any {
    return parent_update(req,res);
}

function parent_delete_controller(req :any, res : any):any {
    return parent_delete(req,res);
}

function parent_login_controller(req :any, res : any):any {
    return parent_login(req,res);
}

export { parent_signup_controller , parent_update_controller, parent_delete_controller , parent_login_controller };