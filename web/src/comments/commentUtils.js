import {ObjectId} from "mongodb";

async function newComment(req, res, db){

    let signed = null;
    if(req.signedCookies.admin){
        signed = req.signedCookies.admin;
    }else if(req.signedCookies.moderator){
        signed = req.signedCookies.moderator;
    }else if(req.signedCookies.user){
        signed = req.signedCookies.user;
    }
    if(signed){
        await db.collection('comments').insertOne({postId: req.body.postId , comment: req.body.comment, creator: signed});
    }

    res.end();

}

async function sendComments(req, res, db){

    const searchParam = {postId: req.params.placeId}
    const data = await db.collection('comments').find(searchParam).toArray().then(res => res).catch(e => console.log(e));
    const result = Promise.all(await data.map(async item => {
        const user = await db.collection('users').findOne({_id: ObjectId(item.creator)});
        item = {...item, usrImage: user.image, username: user.username};
        return item;
    }));
    res.send(await result);
    res.end();
}

export {newComment, sendComments}
