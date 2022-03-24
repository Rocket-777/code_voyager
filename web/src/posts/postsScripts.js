import {ObjectId} from "mongodb";

async function addPost(req, res, db) {
    let signed = null;
    if (req.signedCookies.admin) {
        signed = req.signedCookies.admin;
    } else if (req.signedCookies.moderator) {
        signed = req.signedCookies.moderator;
    } else if (req.signedCookies.user) {
        signed = req.signedCookies.user;
    }
    if (signed) {
        const result = await db.collection('posts').insertOne({
            creator: signed,
            text: req.body.postBody,
            usersLiked: [],
            comments: 0,
            likes: 0
        }).then(res => res);
        res.send(result);
    }
    res.end();

}

async function sendPostById(req, res, db) {
    let userCurrent = null;
    let isLiked = false;

    if (req.signedCookies.user) {
        userCurrent = req.signedCookies.user
    } else if (req.signedCookies.moderator) {
        userCurrent = req.signedCookies.moderator
    } else if (req.signedCookies.admin) {
        userCurrent = req.signedCookies.admin
    }
    let data = await db.collection('posts').findOne({_id: ObjectId(req.params.id)});
    const user = await db.collection('users').findOne({_id: ObjectId(data.creator)});
    const isPrivileged = req.signedCookies.admin || req.signedCookies.moderator;
    if (isPrivileged || req.signedCookies.user === data.creator) {
        data = {...data, isPrivileged: true};
    } else {
        data = {...data, isPrivileged: false};
    }

    data.usersLiked.map(item => {
        if(item === userCurrent){
            isLiked = true;
        }
    });

    res.send({...data, usrImage: user.image, username: user.username, isLiked: isLiked});
    res.end();
}

async function sendPosts(req, res, db) {
    let data = await db.collection('posts').find({}).toArray();
    const isPrivileged = req.signedCookies.admin || req.signedCookies.moderator;


    let userCurrent = null;

    if (req.signedCookies.user) {
        userCurrent = req.signedCookies.user
    } else if (req.signedCookies.moderator) {
        userCurrent = req.signedCookies.moderator
    } else if (req.signedCookies.admin) {
        userCurrent = req.signedCookies.admin
    }

    const result = Promise.all(await data.map(async item => {
        let isLiked = false;
        const user = await db.collection('users').findOne({_id: ObjectId(item.creator)});
        if (isPrivileged || req.signedCookies.user === item.creator) {
            item = {...item, usrImage: user.image, username: user.username, isPrivileged: true};
        } else {
            item = {...item, usrImage: user.image, username: user.username, isPrivileged: false};
        }

        item.usersLiked.map(it => {

            if (it === userCurrent) {
                isLiked = true;

            }
        })
        // if(isLiked){
        //     console.log(item.usersLiked);
        // }
        item = {...item, isLiked: isLiked}
        return item;
    }))

    res.send(await result);
    res.end();
}

async function deletePost(req, res, db) {
    if (req.signedCookies.admin || req.signedCookies.moderator) {
        console.log(req.params.id);
        await db.collection('posts').deleteOne({_id: ObjectId(req.params.id)});
        await db.collection('comments').deleteMany({postId: req.params.id}).catch(e => console.log(e));
    } else if (req.signedCookies.user) {
        const postData = await db.collection('posts').findOne({_id: ObjectId(req.params.id)});
        if (req.signedCookies.user === postData.creator) {
            await db.collection('posts').deleteOne({_id: ObjectId(req.params.id)});
            await db.collection('comments').deleteMany({postId: req.params.id}).catch(e => console.log(e));
        }
    }
    res.end();
}


async function postLikeAction(req, res, db) {
    let user = null;
    if (req.signedCookies.user) {
        user = req.signedCookies.user;
    } else if (req.signedCookies.moderator) {
        user = req.signedCookies.moderator;
    } else if (req.signedCookies.admin) {
        user = req.signedCookies.admin;
    }
    if (user) {
        const post = await db.collection('posts').findOne({_id: ObjectId(req.params.id)}).catch(e => console.log(e));
        let isLiked = false;

        post.usersLiked.map(item => {
            if (item === user) {
                isLiked = true;
            }
        });

        if (isLiked) {
            await db.collection('posts').updateOne({_id: ObjectId(req.params.id)}, {
                $pull: {
                    usersLiked: user
                },
                $inc: {
                    likes: -1
                }
            });
        } else {
            await db.collection('posts').updateOne({_id: ObjectId(req.params.id)}, {
                $addToSet: {
                    usersLiked: user
                },
                $inc: {
                    likes: 1
                }
            });
        }

    }
    res.send({response: 'ok'});
    res.end();

}


export {addPost, sendPosts, deletePost, sendPostById, postLikeAction}
