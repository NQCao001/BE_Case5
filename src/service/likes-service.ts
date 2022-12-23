import {AppDataSource} from "../views/data source";
import {Likes} from "../model/likes";
import {Request, Response} from "express";


export class LikesService{
    private LikesRepository:any
    constructor() {
        AppDataSource.initialize().then(async connection=>{
            console.log('Connect success Data Likes!!!')
            this.LikesRepository=await connection.getRepository(Likes);
        })
    }
    findAll= async (req:Request,res:Response)=>{
        let query = `select * from likes`
        let likes = await this.LikesRepository.query(query);
        return res.status(200).json(likes);
    }
    add = async (req:Request,res:Response)=>{
        let like =req.body
        await this.LikesRepository.save(like);
        return res.status(200).json({
            message:"+ 1 like",
            like:like
        })
    }
}