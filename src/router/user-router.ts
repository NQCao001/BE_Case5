import {Router} from "express";
import userController from "../controller/user-controller";
export const routerUser = Router();
routerUser.get('/get',userController.getAll)
routerUser.post('/register',userController.register)
routerUser.post('/login',userController.login)