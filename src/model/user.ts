import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'user'})
export class User {
    @PrimaryGeneratedColumn({type: "int"})
    public readonly id:number
    @Column({type:"varchar",default:""})
    public MyName:string
    @Column({type:"varchar",default:""})
    public birthday:string
    @Column({type:"boolean",default:true})
    public status:boolean
    @Column({type:"boolean",default:false})
    public role:boolean
    @Column({type:"varchar"})
    public userName: string
    @Column({type:"varchar"})
    public password: string
}