import {ObjectId} from "mongodb";

async function addPost(req, res, db){
    let signed = null;
    if(req.signedCookies.admin){
        signed = req.signedCookies.admin;
    }else if(req.signedCookies.moderator){
        signed = req.signedCookies.moderator;
    }else if(req.signedCookies.user){
        signed = req.signedCookies.user;
    }
    if(signed){
        await db.collection('posts').insertOne({creator: signed, text: req.body.postBody, likedBy: [], comments: []});
    }
    res.end();

}

async function sendPosts(req, res, db){
    let data = await db.collection('posts').find({}).toArray();

    const result = Promise.all(await data.map(async item => {
       const user = await db.collection('users').findOne(ObjectId(item.creator));
       item = {...item, usrImage: user.image, username: user.username};
       return item;
    }))

    res.send(await result);
    res.end();
}

export {addPost, sendPosts}