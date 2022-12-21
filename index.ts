import express from 'express';
import fileUpload from 'express-fileupload';
import {router} from "./src/router/router";
import cors from "cors"
const app = express();
app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('public'))
app.use(express.json());
app.use(fileUpload({
    createParentPath: true
}));
app.use(cors())
app.use('',router);
app.listen(8080,()=>{
    console.log("Server is Running")
})
