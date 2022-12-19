import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'user'})
export class User {
    @PrimaryGeneratedColumn({type: "int"})
    public readonly id:number
    @Column({type:"boolean"})
    public status:boolean
    @Column({type:"boolean"})
    public role:boolean
    @Column({type:"varchar"})
    public userName: string
    @Column({type:"varchar"})
    public password: string
}