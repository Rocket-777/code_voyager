import {ObjectId} from "mongodb";
import * as fs from "fs";
import path from "path";
import {getUser} from "../utils/index.js";
import {rootUrl} from "../root.js";

async function addNewPlace(req, res, db) {
    let pathToImage = null;
    if (req.file) {
        pathToImage = `http://${rootUrl}/uploads/${req.file.filename}`;
    }
    if (req.signedCookies.moderator || req.signedCookies.admin) {
        await db.collection('places').insertOne({
            place_name: req.body.placeName,
            place_description: req.body.placeDescription,
            usersLiked: [],
            comments: 0,
            likes: 0,
            image: pathToImage,
            favoriteCount: 0,
            approved: true,
            place_description_full: req.body.placeFullDesc,
            place_address: req.body.address,
            contact_info: req.body.contact,
            geo: req.body.geo
        }).then(res => console.log(res));
    } else if (req.signedCookies.user) {
        await db.collection('places').insertOne({
            place_name: req.body.placeName,
            place_description: req.body.placeDescription,
            usersLiked: [],
            comments: 0,
            likes: 0,
            image: pathToImage,
            favoriteCount: 0,
            approved: false,
            place_description_full: req.body.placeFullDesc,
            place_address: req.body.address,
            contact_info: req.body.contact,
            geo: req.body.geo
        }).then(res => console.log(res));
    }
    res.end();
}

async function sendFavorites(req, res, db) {

    const user = getUser(req.signedCookies);
    const userData = await db.collection('users').findOne({_id: ObjectId(user)}).catch(e => console.log(e));
    if (userData) {
        const result = Promise.all(userData.favorites.map(async item => {
            const data = await db.collection('places').findOne({_id: ObjectId(item)}).catch(e => console.log(e));
            let isLiked = false;

            data.usersLiked.map(it => {
                if (it === user) {
                    isLiked = true;
                }
            });

            return {...data, isLiked: isLiked, isFavorite: true}

        }));
        res.send(await result);
    }
    res.end();
}

async function sendPlaces(req, res, db) {
    let searchParam = null;
    const user = getUser(req.signedCookies);
    const userData = await db.collection('users').findOne({_id: ObjectId(user)}).catch(e => console.log(e));

    if (req.params.state === 'approved') {
        searchParam = {approved: true};
    }
    if (req.params.state === 'proposed' && (req.signedCookies.moderator || req.signedCookies.admin)) {
        searchParam = {approved: false};
    }
    if (searchParam) {
        const data = await db.collection('places').find(searchParam).toArray().then(res => res).catch(e => console.log(e));
        const result = data.map(item => {
            let isLiked = false;
            let isFavorite = false;
            const id = item._id.toString();
            if (userData) {
                userData.favorites.map(item => {
                    if (item === id) {
                        isFavorite = true;
                    }
                });
            }

            item.usersLiked.map(it => {
                if (it === user) {
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

async function sendPlace(req, res, db) {


    if (req.params.id.length === 24) {
        const place = await db.collection('places').findOne({_id: ObjectId(req.params.id)}).catch(e => console.log(e));
        let islkd = false;
        let isFavorite = false;
        const user = getUser(req.signedCookies);
        const userData = await db.collection('users').findOne({_id: ObjectId(user)}).catch(e => console.log(e));

        if (userData) {
            userData.favorites.map(item => {
                if (item === req.params.id) {
                    isFavorite = true;
                }
            });
        }

        if (place) {
            place.usersLiked.map(item => {
                if (item === user) {
                    islkd = true;
                }
            })
            res.send({...place, isLiked: islkd, isFavorite: isFavorite});
        } else {
            res.send({error: 'NOT_FOUND'});
        }
    } else {
        res.send({error: 'NOT_FOUND; INVALID_ID'});
    }

    res.end();
}

async function removePlace(req, res, db, uplPath) {

    const place = await db.collection('places').findOne({_id: ObjectId(req.body.key)}).catch(e => console.log(e));
    if (place) {
        if (place.image) {
            const imagePath = place.image.split('/').pop();
            fs.unlink(path.resolve(uplPath + imagePath), (err) => {
                if (err) {
                    console.log(err)
                }
            });
        }
        const users = await db.collection('users').find({}).toArray();

        users.map(item => {
            item.favorites.map(async it => {

                if (it === req.body.key) {
                    await db.collection('users').updateOne({_id: item._id}, {
                        $pull: {
                            favorites: req.body.key
                        }
                    })
                }
            })
        });
        await db.collection('places').deleteOne({_id: ObjectId(req.body.key)}).catch(e => console.log(e));

        await db.collection('comments').deleteMany({postId: req.body.key}).catch(e => console.log(e));
    }
    res.end();
}


async function approvePlace(req, res, db) {
    const update = {
        $set: {
            approved: req.body.approved
        }
    }
    await db.collection('places').updateOne({_id: ObjectId(req.params.id)}, update);
    res.send({message: 'Success'})
    res.end();
}


async function likeAction(req, res, db) {
    const user = getUser(req.signedCookies);

    if (user) {
        const place = await db.collection('places').findOne({_id: ObjectId(req.params.id)}).catch(e => console.log(e));
        let isLiked = false;

        place.usersLiked.map(item => {
            if (item === user) {
                isLiked = true;
            }
        });

        if (isLiked) {
            await db.collection('places').updateOne({_id: ObjectId(req.params.id)}, {
                $pull: {
                    usersLiked: user
                },
                $inc: {
                    likes: -1
                }
            });
        } else {
            await db.collection('places').updateOne({_id: ObjectId(req.params.id)}, {
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

async function favoriteAction(req, res, db) {
    const user = getUser(req.signedCookies);
    const userData = await db.collection('users').findOne({_id: ObjectId(user)}).catch(e => console.log(e));
    let isFavorite = false;

    userData.favorites.map(item => {
        if (item === req.params.id) {
            isFavorite = true;
        }
    });

    if (!isFavorite) {
        await db.collection('users').updateOne({_id: ObjectId(user)}, {
            $addToSet: {
                favorites: req.params.id
            }
        }).catch(e => console.log(e));
        await db.collection('places').updateOne({_id: ObjectId(req.params.id)}, {
            $inc: {
                favoriteCount: 1
            }
        });
    } else {
        await db.collection('users').updateOne({_id: ObjectId(user)}, {
            $pull: {
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

async function editPlace(req, res, db, uplPath) {

    if (req.signedCookies.moderator || req.signedCookies.admin) {
        if (req.body.action === "approval") {
            approvePlace(req, res, db).catch(e => console.log(e));
        } else if (req.body.action === "edit") {

            const imageIsFile = typeof req.body.image !== 'string';
            const imageVal = req.body.image === 'null' ? null : req.body.image
            const imageURL = imageIsFile ? `http://${rootUrl}/uploads/${req.file.filename}` : imageVal;
            const oldData = await db.collection('places').findOne({_id: ObjectId(req.params.id)});

            if (imageIsFile && oldData.image) {
                fs.unlink(path.resolve(uplPath + oldData.image.split('/').pop()), (err) => {
                    if (err) {
                        console.log(err)
                    }
                });
            } else if (!imageVal && oldData.image) {
                fs.unlink(path.resolve(uplPath + oldData.image.split('/').pop()), (err) => {
                    if (err) {
                        console.log(err)
                    }
                });
            }

            const update = {
                $set: {
                    place_name: req.body.placeName,
                    place_description: req.body.placeDescription,
                    place_description_full: req.body.placeFullDesc,
                    place_address: req.body.address,
                    contact_info: req.body.contact,
                    geo: req.body.geo,
                    image: imageURL
                }
            }
            await db.collection('places').updateOne({_id: ObjectId(req.params.id)}, update);
            res.send({message: 'Success'})
            res.end();
        }
    } else {
        res.status(401);
    }
}

export {
    addNewPlace,
    sendPlaces,
    removePlace,
    approvePlace,
    sendPlace,
    likeAction,
    favoriteAction,
    sendFavorites,
    editPlace
}
