import { admin_signup_controller, admin_login_controller, admin_update_controller ,admin_delete_controller} from "../controller/admin_controller";
import { Router } from "express";
import adminTokenVerify from "../middleware/admin_token_verify";
import { check_key } from "../middleware/check_secret_key";

const admin_router = Router();

admin_router.post("/signup/:key",check_key, admin_signup_controller);
admin_router.post("/login", admin_login_controller);
admin_router.put("/update/adminid", adminTokenVerify, admin_update_controller);
admin_router.delete("/delete/adminid",adminTokenVerify,admin_delete_controller)

export default admin_router;
