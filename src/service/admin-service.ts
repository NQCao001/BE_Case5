import {AppDataSource} from "../views/data source";
import {User} from "../model/user";
import {Request, Response} from "express";

export class AdminService{
    private UserRepository: any

    constructor() {
        AppDataSource.initialize().then(async connection => {
            console.log('Connect success Data User!!!')
            this.UserRepository = await connection.getRepository(User);
        })
    }
    findAllAccount = async (req:Request,res:Response) =>{
        let account = await this.UserRepository.find()
        return res.status(200).json({
            message:"Thanh cong",
            account:account
        })
    }
}