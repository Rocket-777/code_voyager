import {ObjectId} from "mongodb";
import * as fs from 'fs';
import path from "path";

async function setUserImage(req, res, db){
    let pathToImage = null;
    let user = null;
    if(req.signedCookies.admin){
        user = req.signedCookies.admin;
    }
    else if(req.signedCookies.moderator){
        user = req.signedCookies.moderator;
    }
    else if(req.signedCookies.user){
        user = req.signedCookies.user;
    }
    if(req.file){
        pathToImage = `http://localhost:3003/uploads/${req.file.filename}`;
    }
    const update = {
        $set: {
            image: pathToImage
        }
    }
    await db.collection('users').updateOne({_id: ObjectId(user)}, update);
    res.end();
}
async function removeUsrImage(req, res, db, uplPath){

    let user = null;
    if(req.signedCookies.admin){
        user = req.signedCookies.admin;
    }
    else if(req.signedCookies.moderator){
        user = req.signedCookies.moderator;
    }
    else if(req.signedCookies.user){
        user = req.signedCookies.user;
    }
    console.log(user);
    const userData = await db.collection('users').findOne({_id: ObjectId(user)});
    fs.unlink(path.resolve(uplPath + userData.image.split('/').pop()), (err) => {
        if(err){
            console.log(err)
        }
    });

    const update = {
        $set: {
            image: null
        }
    }
    await db.collection('users').updateOne({_id: ObjectId(user)}, update);
    res.end();

}
export {setUserImage, removeUsrImage}