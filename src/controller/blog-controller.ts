import {BlogService} from "../service/blog-service";
import {Request, Response} from "express";

export class BlogController{
    private blogService:BlogService
    constructor() {
        this.blogService = new BlogService();
    }
    getAll=async (req:Request,res:Response)=>{
        let blog =this.blogService.findAll();
        res.render('/',{
            listCart: blog
        })
    }
}
export default new BlogController();