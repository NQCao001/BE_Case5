import {AppDataSource} from "../views/data source";
import {Likes} from "../model/likes";


export class LikesService{
    private LikesRepository:any
    constructor() {
        AppDataSource.initialize().then(async connection=>{
            console.log('Connect success Data Likes!!!')
            this.LikesRepository=await connection.getRepository(Likes);
        })
    }
    findAll= async ()=>{
        let likes = await this.LikesRepository.find();
        return likes;
    }
}