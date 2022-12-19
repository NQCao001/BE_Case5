import {UserService} from "../service/user-service";
import {Request, Response} from "express";

export class UserController {
    private userService: UserService

    constructor() {
        this.userService = new UserService();
    }

    getAll = async (req: Request, res: Response) => {
        let user = this.userService.findAll();
        res.render('/', {
            listCart: user
        })
    }
    register = async (req: Request, res: Response) => {
        return await this.userService.addAccount(req,res)
    }
    login = async (req:Request,res:Response)=>{
        return await this.userService.loginAccount(req,res)
    }
}

export default new UserController();