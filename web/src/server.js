import express from 'express';
import cors from 'cors';
import * as Mongo from 'mongodb';
import * as Utils from './dbUtils/mongoUtils.js'
import {ObjectId} from "mongodb";
import {submitNewuser} from "./submitNewUser/submitNewUser.js";

const app = express();
const port = 3003; // TODO ENV VARIABLES

const mongoUri = "mongodb://root:root123@localhost:27015/?authSource=admin";
const {MongoClient} = Mongo;
const dbClient = new MongoClient(mongoUri);

app.use(cors());
app.use(express.json());

Utils.tryConnection(dbClient).catch(e => console.log(e));

app.post('/users', (req, res, next) => {

    console.log('got a post req');
    submitNewuser(dbClient,'BILLY','fucku','BOSS OF THE GYM').catch(e => console.log(e));

    res.end();
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});