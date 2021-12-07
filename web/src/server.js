import express from 'express';
import cors from 'cors';
import * as Mongo from 'mongodb';
import * as Utils from './dbUtils/mongoUtils.js'
import {ObjectId} from "mongodb";
import {submitNewuser} from "./submitNewUser/submitNewUser.js";
import cookie_parser from 'cookie-parser';
import {getAllUsers} from "./dbUtils/mongoUtils.js";
import {cookieAuthorization} from "./authorization/index.js";
import {sendUserData} from "./usrData/getUsrData.js";

const app = express();
const port = 3003; // TODO ENV VARIABLES

const mongoUri = "mongodb://root:root123@localhost:27015/?authSource=admin";
const {MongoClient} = Mongo;
const dbClient = new MongoClient(mongoUri);

app.use(cookie_parser('ass'));
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(express.json());

async function sendUsers(req ,res ){
    let users = [];
    await getAllUsers(dbClient, req).then(response => res.send(JSON.stringify(response)));

    res.end();

}


Utils.tryConnection(dbClient).catch(e => console.log(e));

app.post('/users', (req, res, next) => {
    console.log('got a post req');
    submitNewuser(dbClient,req.body.username,req.body.password,0).catch(e => console.log(e));
    res.end();
});

app.get('/login', (req, res, next) => {

    console.log('got a auth req');
    cookieAuthorization(req, res, dbClient).catch(e => console.log(e));


});
app.get('/users', (req, res, next) => {
    sendUsers(req, res, dbClient).catch(e => console.log(e));
});
app.get('/home', (req, res, next) => {
    sendUserData(req, res, dbClient).catch(e => console.log(e));

});
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});