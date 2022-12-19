import {AppDataSource} from "../views/data source";
import {Comment} from "../model/comment";

export class CommentService{
    private CommentRepository:any
    constructor() {
        AppDataSource.initialize().then(async connection=>{
            console.log('Connect success Data Comment!!!')
            this.CommentRepository=await connection.getRepository(Comment);
        })
    }
    findAll= async ()=>{
        let comment = await this.CommentRepository.find();
        return comment;
    }
}