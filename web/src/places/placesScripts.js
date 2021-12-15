import {ObjectId} from "mongodb";
import * as fs from "fs";

async function addNewPlace (req, res, db){
    await db.collection('places').insertOne({place_name: req.body.placeName, place_description: req.body.placeDescription,
    usersLiked: [], comments: [], image: `http://localhost:3003/uploads/${req.file.filename}`}).then(res => console.log(res));
    res.end();
}

async function sendPlaces (req, res, db){
    const data = await db.collection('places').find({}).toArray().then(res => res).catch(e => console.log(e));
    res.send(data);

    res.end;

}

async function removePlace(req, res, db){

    const place = await db.collection('places').findOne({_id: ObjectId(req.body.key)}).catch(e => console.log(e));
    if(place){

        const imagePath = place.image.split('/').pop();
        console.log(imagePath);
        await db.collection('places').deleteOne({_id: ObjectId(req.body.key)}).catch(e => console.log(e));
        fs.unlink('C:/Users/kirik/WebstormProjects/code_voyager/web/uploads/' + imagePath, (err) => {
            if(err){
                console.log(err)
            }
        });
    }
    res.end();
}
export {addNewPlace, sendPlaces, removePlace}