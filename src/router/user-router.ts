import {Router} from "express";
import userController from "../controller/user-controller";
import {auth} from "../middleware/auth";
export const routerUser = Router();
routerUser.post('/login',userController.login)
routerUser.post('/register',userController.register)
// routerUser.use(auth)
routerUser.put('/edit-user/:id',userController.uploadUser)