import express from 'express';
import cors from 'cors';
import * as Mongo from 'mongodb';
import * as Utils from './dbUtils/mongoUtils.js'

const app = express();
const port = 3003; // TODO ENV VARIABLES

const mongoUri = "mongodb://root:root123@localhost:27015/?authSource=admin";
const {MongoClient} = Mongo;
const dbClient = new MongoClient(mongoUri);




app.use(cors());
app.use(express.json());

Utils.tryConnection(dbClient).catch(e => console.log(e));

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);

});