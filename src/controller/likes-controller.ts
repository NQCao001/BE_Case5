import {Request, Response} from "express";
import {LikesService} from "../service/likes-service";

export class LikesController {
    private likesService: LikesService

    constructor() {
        this.likesService = new LikesService();
    }

    getAll = async (req: Request, res: Response) => {
        return await this.likesService.findAll(req, res)
    }
    aLike = async (req: Request, res: Response) => {
        return await this.likesService.add(req, res)
    }
}

export default new LikesController();