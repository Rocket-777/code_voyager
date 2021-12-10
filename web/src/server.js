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


const app = express();
const port = 3003; // TODO ENV VARIABLES

const mongoUri = "mongodb://root:root123@localhost:27015/?authSource=admin";
const {MongoClient} = Mongo;
const dbClient = new MongoClient(mongoUri);

app.use(cookie_parser('ass'));
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(express.json());

let db;
dbClient.connect(function(err, client){
    if(err){
        throw err;
    }
    db = client.db('proj');
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
app.get('/users', (req, res, next) => {
    sendUsers(req, res).catch(e => console.log(e));
});
app.get('/home', (req, res, next) => {
    sendUserData(req, res, db).catch(e => console.log(e));
});
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});