import {AppDataSource} from "../views/data source";

import {Blog} from "../model/blog";
import {Request, Response} from "express";

export class BlogService{
    private BlogRepository:any
    constructor() {
        AppDataSource.initialize().then(async connection=>{
            console.log('Connect success Data Blog!!!')
            this.BlogRepository=await connection.getRepository(Blog);
        })
    }
    findAll= async (req:Request,res:Response)=>{
        let blog = await this.BlogRepository.find();
        return res.status(200).json({
            message:'success',
            blogs:blog
        })
    }
    addBlog = async (req:Request,res:Response)=>{
        let blog =req.body
        await this.BlogRepository.save(blog)
        return res.status(200).json({
            message:"Thanh cong"
        })
    }
    checkBlog = async (req:Request,res:Response)=>{
        let id = +req.params.id
        let blog = await this.BlogRepository.findOneById(id)
        return res.status(200).json({
            message:"lay blog",
            blog:blog
        })
    }
    upLike = async (req:Request,res:Response)=>{
        let id= +req.params.id
        let ac = await this.checkBlog;
        console.log(ac)
        // let id = +req.params.id;
        // await this.BlogRepository.update({id: id}, info)
        // return res.status(201).json({
        //     message: "Edit Success!!!"
        // })
    }
}
