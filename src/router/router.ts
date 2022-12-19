import {Router} from "express";
import {routerUser} from "./user-router";
import {routerBlog} from "./blog-router";
import {routerComment} from "./comment-router";
import {routerLikes} from "./likes-router";

export const router = Router()
router.use('/user',routerUser);
router.use('/blog',routerBlog);
router.use('/comment',routerComment);
router.use('/likes',routerLikes)
