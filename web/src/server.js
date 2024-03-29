import express from 'express';
import * as fs from 'fs'
import cors from 'cors';
import * as Mongo from 'mongodb';
import * as Utils from './dbUtils/mongoUtils.js'
import {ObjectId} from "mongodb";
import {newComment, sendComments} from './comments/commentUtils.js'
import {submitNewUser} from "./submitNewUser/submitNewUser.js";
import cookie_parser from 'cookie-parser';
import {getAllUsers} from "./dbUtils/mongoUtils.js";
import {cookieAuthorization} from "./authorization/index.js";
import {sendUserData} from "./usrData/getUsrData.js";
import {cookieDenie} from "./authorization/cookieUtils.js";
import {addNewPlace, sendPlaces, removePlace, approvePlace,
    sendPlace, likeAction, favoriteAction, sendFavorites, editPlace} from "./places/placesScripts.js";
import crypto from 'crypto';
import multer from 'multer';
import {setUserImage, removeUsrImage} from "./usrData/userScripts.js";
import {addPost, sendPosts, deletePost, sendPostById, postLikeAction} from "./posts/postsScripts.js";
import {fileURLToPath} from 'url';
import path from "path";



const app = express(); // Application variable
const port = 3003; // Server listening port


const mongoUri = "mongodb://root:root123@localhost:27015/?authSource=admin";
const {MongoClient} = Mongo;
const dbClient = new MongoClient(mongoUri);

if(!fs.existsSync('../uploads')){
    fs.mkdirSync('../uploads');
}

const uploadPath =  path.dirname(fileURLToPath(import.meta.url)) + '/../uploads/'; //UPLOAD RELATIVE PATH
const publicPath = path.dirname(fileURLToPath(import.meta.url)) + '/../../frontend/dist/';
// const bundlePath = path.dirname(fileURLToPath(import.meta.url)) + '/../../frontend/dist/';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const error = (req.signedCookies.admin || req.signedCookies.user || req.signedCookies.moderator) ? null : new Error('unauthorized');
        cb(error, uploadPath)
    },
    filename: function (req, file, cb) {
        console.log(file);
        const extArray = file.mimetype.split("/");
        const extension = extArray[extArray.length - 1];
        const name = crypto.randomBytes(10).toString('hex');
        cb(null, name + Date.now()+ '.' +extension)
    }
});

const upload = multer({storage: storage, limits:{
        fieldSize: 25 * 1024 * 1024
    }});

app.use(cookie_parser('ass'));
app.use(cors({origin: ['http://localhost:3000', 'http://192.168.1.47:3000' ], credentials: true}));
app.use(express.json());
app.use(express.static(path.resolve(publicPath)));



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

app.delete('/news/:id', (req, res, next) => {
    deletePost(req, res, db).catch(e => console.log(e));
});

app.post('/news', (req, res, next) => {
    addPost(req, res, db).catch(e => console.log(e));
});
app.get('/news', (req, res, next) => {
    sendPosts(req, res, db).catch(e => console.log(e));
});
app.get('/news/:id', (req, res, next) => {
   sendPostById(req, res, db);
});
app.put('/news/:id/like', (req, res, next) => {
    postLikeAction(req, res, db);
});

app.post('/users', (req, res, next) => {
    console.log('got a post req');
    submitNewUser(db,req.body.username,req.body.password,1, res).catch(e => console.log(e));
});

app.get('/login', (req, res, next) => {
    console.log('got a auth req');
    cookieAuthorization(req, res, db).catch(e => console.log(e));
});
app.get('/logout', (req, res, next) => {
    cookieDenie(req, res, db).catch(e => console.log(e));
});

app.get('/comments/:placeId', (req, res, next) => {
    sendComments(req, res, db);
});

app.post('/places/new', upload.single('image') , (req, res, next) => {
    console.log('Got new place req!');
    // console.log(req.body);
    addNewPlace(req, res, db).catch(e => console.log(e));
});
app.post('/comments', upload.single('image') , (req, res, next) => {
    newComment(req, res, db).catch(e => console.log(e));
});
app.get('/places/favorites', (req, res, next) => {
    sendFavorites(req, res, db).catch(e => console.log(e));
});

app.get('/places/:state', (req, res, next) => {
    sendPlaces(req, res, db).catch(e => console.log(e));
});

app.get('/places/id/:id', (req, res, next) => {
    sendPlace(req, res, db).catch(e => console.log(e));
});
app.delete('/places', (req, res, next) => {
    removePlace(req, res, db, uploadPath).catch(e => console.log(e));
});
app.put('/places/:id', upload.single('image'), (req, res, next) => {
    editPlace(req, res, db, uploadPath).catch(e => console.log(e));
});
app.put('/places/:id/like', (req, res, next) => {
    likeAction(req, res, db).catch(e => console.log(e));
});
app.put('/places/:id/favorite', (req, res, next) => {
    favoriteAction(req, res, db).catch(e => console.log(e));
});

app.get('/users', (req, res, next) => {
    sendUsers(req, res).catch(e => console.log(e));
});
app.get('/home', (req, res, next) => {
    sendUserData(req, res, db).catch(e => console.log(e));
});
app.post('/userImage', upload.single('image'), (req, res, next) => {
    setUserImage(req, res, db).catch(e => console.log(e));
});
app.delete('/userImage', (req, res, next) => {
    removeUsrImage(req, res, db, uploadPath).catch(e => console.log(e));
});
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
    console.log(uploadPath);

});

app.get('/uploads/:id', (req, res, next) => {
    //res.send(req.params.id);
    res.sendFile(path.resolve(`${uploadPath}` + `${req.params.id}`));
});

app.get('(/*)?', (req, res, next) => {
    res.sendFile(path.resolve(publicPath + '/index.html'));
});

process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});
