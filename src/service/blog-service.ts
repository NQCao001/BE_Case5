import {AppDataSource} from "../views/data source";

import {Blog} from "../model/blog";

export class BlogService{
    private BlogRepository:any
    constructor() {
        AppDataSource.initialize().then(async connection=>{
            console.log('Connect success Data Blog!!!')
            this.BlogRepository=await connection.getRepository(Blog);
        })
    }
    findAll= async ()=>{
        let blog = await this.BlogRepository.find();
        return blog;
    }
}