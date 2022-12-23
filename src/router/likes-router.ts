import {Router} from "express";
import likesController from "../controller/likes-controller";
export const routerLikes = Router();
routerLikes.get('/get',likesController.getAll)
routerLikes.post('/add',likesController.aLike)