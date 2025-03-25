import { Router } from "express";
import { bodyValidator } from "../../middlewares/request-validator.middleware.js";
import authCtrl from "./auth.controller.js";
import { loginDTO, userRegisterDTO } from "./auth.request.js";
import checkLogin from "../../middlewares/auth.middleware.js";
import { checkPermission } from "../../middlewares/rbac.middleware.js";

const authRouter = Router();

authRouter.post("/register", bodyValidator(userRegisterDTO), authCtrl.register);
authRouter.post("/login",bodyValidator(loginDTO), authCtrl.login);
authRouter.get("/profile",checkLogin,checkPermission(['admin', 'user']), authCtrl.getLoggedInUser)
authRouter.get("/admin", checkLogin,checkPermission(['admin']), authCtrl.getAdmins)

export default authRouter;   