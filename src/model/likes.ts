import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Blog} from "./blog";
import {User} from "./user";

@Entity({name:'likes'})
export class Likes{
    @PrimaryGeneratedColumn({type:"int"})
    public readonly idLikes:number
    @ManyToOne(()=>Blog)
    public idBlog:Blog
    @ManyToOne(()=>User)
    public idUser:User
}