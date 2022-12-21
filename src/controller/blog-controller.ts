import {BlogService} from "../service/blog-service";
import {Request, Response} from "express";

export class BlogController{
    private blogService:BlogService
    constructor() {
        this.blogService = new BlogService();
    }
    getAll=async (req:Request,res:Response)=>{
        return await this.blogService.findAll(req,res)
    }
    createBlog = async (req:Request,res:Response)=>{
        return await this.blogService.addBlog(req,res)
    }
}
export default new BlogController();