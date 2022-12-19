import {Router} from "express";
import blogController from "../controller/blog-controller";
export const routerBlog = Router();
routerBlog.get('/get',blogController.getAll)