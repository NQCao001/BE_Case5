 import {CommentService} from "../service/comment-service";
 import {Request, Response} from "express";

export class CommentController{
    private commentService:CommentService
    constructor() {
        this.commentService = new CommentService();
    }
    getAll=async (req:Request,res:Response)=>{
        let comment =this.commentService.findAll();
        res.render('/',{
            listCart: comment
        })
    }
}
export default new CommentController();