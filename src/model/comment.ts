import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Blog} from "./blog";
import {User} from "./user";

@Entity({name:'comment'})
export class Comment{
    @PrimaryGeneratedColumn({type:"int"})
    public readonly idComment:number
    @Column({type:"longtext"})
    public content:string
    @ManyToOne(()=>Blog)
    public idBlog:Blog
    @ManyToOne(()=>User)
    public idUser:User
}