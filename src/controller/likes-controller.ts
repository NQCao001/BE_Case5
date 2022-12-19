import {Request, Response} from "express";
import {LikesService} from "../service/likes-service";

export class LikesController{
    private likesService:LikesService
    constructor() {
        this.likesService = new LikesService();
    }
    getAll=async (req:Request,res:Response)=>{
        let likes =this.likesService.findAll();
        res.render('/',{
            listCart: likes
        })
    }
}
export default new LikesController();