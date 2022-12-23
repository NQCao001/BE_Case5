import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {Likes} from "./likes";

@Entity({name:'blog'})
export class Blog{
    @PrimaryGeneratedColumn({type:"int"})
    public readonly id:number
    @Column({type:"varchar"})
    public title:string
    @Column({type:"longtext"})
    public content:string
    @Column({type:"boolean",default:true})
    public status:boolean
    @OneToMany(() => Likes, (like) => like.idBlog)
    public likes: Likes[];
    @Column({type:"longtext"})
    public img:string
    @ManyToOne(()=>User)
    public idUser:User
}