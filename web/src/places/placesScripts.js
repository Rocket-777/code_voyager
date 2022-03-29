import {ObjectId} from "mongodb";
import * as fs from "fs";
import path from "path";
import {getUser} from "../utils/index.js";


async function addNewPlace (req, res, db){
    let pathToImage = null;
    if(req.file){
        pathToImage = `http://localhost:3003/uploads/${req.file.filename}`;
    }
    if(req.signedCookies.moderator || req.signedCookies.admin){
        await db.collection('places').insertOne({place_name: req.body.placeName, place_description: req.body.placeDescription,
            usersLiked: [], comments: 0, likes: 0, image: pathToImage, favoriteCount: 0, approved: true}).then(res => console.log(res));
    }
    else if(req.signedCookies.user){
        await db.collection('places').insertOne({place_name: req.body.placeName, place_description: req.body.placeDescription,
            usersLiked: [], comments: 0, likes: 0,  image: pathToImage, favoriteCount: 0, approved: false}).then(res => console.log(res));
    }
    res.end();
}

async function sendFavorites (req, res, db){

    const user = getUser(req.signedCookies);
    const userData = await db.collection('users').findOne({_id: ObjectId(user)}).catch(e => console.log(e));
    if(userData){
        const result = Promise.all(userData.favorites.map(async item => {
            const data = await db.collection('places').findOne({_id: ObjectId(item)}).catch(e => console.log(e));
            if(data){
                let isLiked = false;
                data.usersLiked.map(it => {
                    if(it === user){
                        isLiked = true;
                    }
                });
                return {...data, isLiked: isLiked, isFavorite: true}
            }

        }));
        res.send(await result);
    }
    res.end();
}

async function sendPlaces (req, res, db){
    let searchParam = null;
    const user = getUser(req.signedCookies);
    const userData = await db.collection('users').findOne({_id: ObjectId(user)}).catch(e => console.log(e));

    if(req.params.state === 'approved'){
        searchParam = {approved : true};
    }
    if(req.params.state === 'proposed' && (req.signedCookies.moderator || req.signedCookies.admin)){
        searchParam = {approved : false};
    }
    if(searchParam){
        const data = await db.collection('places').find(searchParam).toArray().then(res => res).catch(e => console.log(e));
        const result = data.map(item => {
            let isLiked = false;
            let isFavorite = false;
            const id = item._id.toString();
            if(userData){
                userData.favorites.map(item => {
                    if(item === id){
                        isFavorite = true;
                    }
                });
            }

            item.usersLiked.map( it => {
                if(it === user){
                    isLiked = true;
                }
            })

            item = {...item, isLiked: isLiked, isFavorite: isFavorite}

            return item;

        });
        res.send(result);
    }
    res.end;

}

async function sendPlace(req, res, db){


    if(req.params.id.length === 24){
        const place = await db.collection('places').findOne({_id: ObjectId(req.params.id)}).catch(e => console.log(e));
        let islkd =  false;
        let isFavorite = false;
        const user = getUser(req.signedCookies);
        const userData = await db.collection('users').findOne({_id: ObjectId(user)}).catch(e => console.log(e));

        if(userData){
            userData.favorites.map(item => {
                if(item === req.params.id){
                    isFavorite = true;
                }
            });
        }

        place.usersLiked.map(item => {
            if(item === user){
                islkd =  true;
            }
        })
        if(place){
            res.send({...place, isLiked: islkd, isFavorite: isFavorite});
        }
        else{
            res.send({error: 'NOT_FOUND'});
        }
    }
    else{
        res.send({error: 'NOT_FOUND; INVALID_ID'});
    }

    res.end();
}

async function removePlace(req, res, db, uplPath){

    const place = await db.collection('places').findOne({_id: ObjectId(req.body.key)}).catch(e => console.log(e));
    if(place){
        if(place.image){
            const imagePath = place.image.split('/').pop();
            fs.unlink(path.resolve(uplPath + imagePath), (err) => {
                if(err){
                    console.log(err)
                }
            });
        }

        await db.collection('places').deleteOne({_id: ObjectId(req.body.key)}).catch(e => console.log(e));
        await db.collection('comments').deleteMany({postId: req.body.key}).catch(e => console.log(e));
    }
    res.end();
}


async function approvePlace(req, res, db){
    const update = {
        $set: {
            approved: req.body.approved
        }
    }
    await db.collection('places').updateOne({_id: ObjectId(req.params.id)}, update);
    res.send({message: 'Success'})
    res.end();
}


async function likeAction(req, res, db){
    const user = getUser(req.signedCookies);

    if(user){
        const place = await db.collection('places').findOne({_id: ObjectId(req.params.id)}).catch(e => console.log(e));
        let isLiked = false;

        place.usersLiked.map(item => {
            if(item === user){
                isLiked = true;
            }
        });

        if(isLiked){
            await db.collection('places').updateOne({_id: ObjectId(req.params.id)}, {
                $pull:{
                    usersLiked: user
                },
                $inc:{
                    likes: -1
                }
            });
        }
        else{
            await db.collection('places').updateOne({_id: ObjectId(req.params.id)}, {
                $addToSet:{
                    usersLiked: user
                },
                $inc:{
                    likes: 1
                }
            });
        }

    }
    res.send({response: 'ok'});
    res.end();

}

async function favoriteAction(req, res, db){
    const user = getUser(req.signedCookies);
    const userData = await db.collection('users').findOne({_id: ObjectId(user)}).catch(e => console.log(e));
    let isFavorite = false;

    userData.favorites.map(item => {
        if(item === req.params.id){
            isFavorite = true;
        }
    });

    if(!isFavorite){
        await db.collection('users').updateOne({_id: ObjectId(user)}, {
            $addToSet:{
                favorites: req.params.id
            }
        }).catch(e => console.log(e));
        await db.collection('places').updateOne({_id: ObjectId(req.params.id)}, {
            $inc: {
                favoriteCount: 1
            }
        });
    }
    else{
        await db.collection('users').updateOne({_id: ObjectId(user)}, {
            $pull:{
                favorites: req.params.id
            }
        }).catch(e => console.log(e));
        await db.collection('places').updateOne({_id: ObjectId(req.params.id)}, {
            $inc: {
                favoriteCount: -1
            }
        });
    }

    res.end();
}

export {addNewPlace, sendPlaces, removePlace, approvePlace, sendPlace, likeAction, favoriteAction, sendFavorites}
