import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";

@Entity({name:'blog'})
export class Blog{
    @PrimaryGeneratedColumn({type:"int"})
    public readonly id:number
    @Column({type:"varchar"})
    public title:string
    @Column({type:"longtext"})
    public content:string
    @Column({type:"boolean"})
    public status:boolean
    @Column({type:"int"})
    public like:number
    @Column({type:"longtext"})
    public img:string
    @ManyToOne(()=>User)
    public idUser:User
}