import {AppDataSource} from "../views/data source";
import {User} from "../model/user";
import {Request, Response} from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {SECRET} from "../middleware/auth";

export class UserService {
    private UserRepository: any

    constructor() {
        AppDataSource.initialize().then(async connection => {
            console.log('Connect success Data User!!!')
            this.UserRepository = await connection.getRepository(User);
        })
    }

    findAll = async () => {
        let user = await this.UserRepository.find();
        return user;
    }
    addAccount = async (req: Request, res: Response) => {
        let user = req.body;
        let userFind = await this.UserRepository.findOneBy({userName:user.userName});
            if (userFind) {
                return res.status(201).json({
                    message: 'Tai khoan da ton tai!!!',
                    check: false
                })
            } else {
                user.password = await bcrypt.hash(user.password, 10)
                await this.UserRepository.save(user);
                return res.status(201).json({
                    message: "Success",
                    check: true,
                })
            }
        }
    loginAccount = async (req: Request, res: Response) => {
        let user = req.body;
        let userFind = await this.UserRepository.findOneBy({
            username: user.username
        });
        if (!userFind) {
            return res.status(201).json({
                message: "Error User or Password!!!"
            })
        } else {
            let comparePassword = await bcrypt.compare(user.password, userFind.password);
            if (!comparePassword) {
                return res.status(201).json({
                    message: "Error User or Password!!!"
                })
            } else {
                let payload = {
                    idUser: userFind._id,
                    username: userFind.username
                }

                let token = await jwt.sign(payload, SECRET, {
                    expiresIn: 36000
                })
                return res.status(200).json({
                    token: token,
                    message: "Success!!!",
                    idUser: userFind._id
                })
            }
        }
    }
}