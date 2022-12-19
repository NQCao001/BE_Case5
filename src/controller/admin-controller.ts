import {AdminService} from "../service/admin-service";
import {Request, Response} from "express";

export class AdminController{
    private adminService:AdminService
    constructor() {
        this.adminService=new AdminService()
    }
    getAll = async (req:Request,res:Response)=>{
        return await this.adminService.findAllAccount(req,res)
    }
}
export default new AdminController();