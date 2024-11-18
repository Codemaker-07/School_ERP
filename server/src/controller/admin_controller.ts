import { admin_signup_service , admin_login_service , admin_update_service , admin_delete_service} from "../service/admin_service";

function admin_signup_controller(req: any, res: any): any {
    return admin_signup_service(req, res);
}

function admin_login_controller(req: any, res: any): any {
    return admin_login_service(req, res);
}

function admin_update_controller(req: any, res: any): any {
    return admin_update_service(req, res);
}

function admin_delete_controller(req: any, res: any): any {
    return admin_delete_service(req, res);
}

export { admin_signup_controller , admin_login_controller , admin_update_controller , admin_delete_controller};
