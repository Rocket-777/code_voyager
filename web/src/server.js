import express from 'express';
import cors from 'cors';
import * as Mongo from 'mongodb';
import * as Utils from './dbUtils/mongoUtils.js'
import {ObjectId} from "mongodb";
import {submitNewUser} from "./submitNewUser/submitNewUser.js";
import cookie_parser from 'cookie-parser';
import {getAllUsers} from "./dbUtils/mongoUtils.js";
import {cookieAuthorization} from "./authorization/index.js";
import {sendUserData} from "./usrData/getUsrData.js";
import {cookieDenie} from "./authorization/cookieUtils.js";
import {addNewPlace, sendPlaces} from "./places/placesScripts.js";
import crypto from 'crypto';
import multer from 'multer';

const app = express(); // Application variable
const port = 3003; // Server listening port




const mongoUri = "mongodb://root:root123@localhost:27015/?authSource=admin";
const {MongoClient} = Mongo;
const dbClient = new MongoClient(mongoUri);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'C:/Users/kirik/WebstormProjects/code_voyager/web/uploads/')
    },
    filename: function (req, file, cb) {
        console.log(file);
        const extArray = file.mimetype.split("/");
        const extension = extArray[extArray.length - 1];
        const name = crypto.randomBytes(10).toString('hex');
        cb(null, name + Date.now()+ '.' +extension)
    }
});
const upload = multer({storage: storage});

app.use(cookie_parser('ass'));
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(express.json());






let db = null;
dbClient.connect(function(err, client){
    if(err){
        throw err;
    }
    db = client.db('proj')
    if(db){
        console.log('@ Mongo connected!');
    }
});



async function sendUsers(req ,res, ){

    await getAllUsers(db, req).then(response => res.send(JSON.stringify(response)));

    res.end();

}





app.post('/users', (req, res, next) => {
    console.log('got a post req');
    submitNewUser(db,req.body.username,req.body.password,0).catch(e => console.log(e));
    res.end();
});

app.get('/login', (req, res, next) => {
    console.log('got a auth req');
    cookieAuthorization(req, res, db).catch(e => console.log(e));
});
app.get('/logout', (req, res, next) => {
    cookieDenie(req, res, db).catch(e => console.log(e));
});

app.post('/places/new', upload.single('image') , (req, res, next) => {
    console.log('Got new place req!');
    //console.log(req.body);
    addNewPlace(req, res, db).catch(e => console.log(e));
    console.log(req.file.path);
});
app.get('/places', (req, res, next) => {
    sendPlaces(req, res, db).catch(e => console.log(e));
});

app.get('/users', (req, res, next) => {
    sendUsers(req, res).catch(e => console.log(e));
});
app.get('/home', (req, res, next) => {
    sendUserData(req, res, db).catch(e => console.log(e));
});
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

app.get('/uploads/:id', (req, res, next) => {
    //res.send(req.params.id);
    res.sendFile(`C:/Users/kirik/WebstormProjects/code_voyager/web/uploads/${req.params.id}`);


});
process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});