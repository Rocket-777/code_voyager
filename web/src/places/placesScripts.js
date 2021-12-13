
async function addNewPlace (req, res, db){
    await db.collection('places').insertOne({place_name: req.body.placeName, place_description: req.body.placeDescription,
    usersLiked: [], comments: [], image: {data: req.file, contentType: 'image/*', }},).then(res => console.log(res));
    res.end();
}

async function sendPlaces (req, res, db){
    const data = await db.collection('places').find({}).toArray().then(res => res).catch(e => console.log(e));
    res.send(data);
    res.end;

}
export {addNewPlace, sendPlaces}