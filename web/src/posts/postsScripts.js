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
       const shit = await db.collection('posts').insertOne({creator: signed, text: req.body.postBody, likedBy: [], comments: []}).then(res => res);
       res.send(shit);
    }
    res.end();

}

async function sendPosts(req, res, db){
    let data = await db.collection('posts').find({}).toArray();
    const isPrivileged = req.signedCookies.admin || req.signedCookies.moderator;

    const result = Promise.all(await data.map(async item => {
       const user = await db.collection('users').findOne({_id: ObjectId(item.creator)});
       if(isPrivileged || req.signedCookies.user === item.creator){
           item = {...item, usrImage: user.image, username: user.username, isPrivileged: true};
       }else{
           item = {...item, usrImage: user.image, username: user.username, isPrivileged: false};
       }

       return item;
    }))

    res.send(await result);
    res.end();
}

async function deletePost(req, res, db){
    if(req.signedCookies.admin || req.signedCookies.moderator){
        console.log(req.params.id);
        await db.collection('posts').deleteOne({ _id: ObjectId(req.params.id)});
    }
    else if(req.signedCookies.user){
        const postData = await db.collection('posts').findOne({ _id: ObjectId(req.params.id)});
        if(req.signedCookies.user === postData.creator){
            await db.collection('posts').deleteOne({_id: ObjectId(req.params.id)});
        }
    }
    res.end();
}

export {addPost, sendPosts, deletePost}
