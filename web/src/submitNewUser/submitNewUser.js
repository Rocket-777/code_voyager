async function submitNewUser(dbClient, name, password, status, res){ //TODO connect with frontend
    await dbClient.command({ ping: 1 });
    console.log("@@ Connected successfully");
    let userExists = 'success';
    if(await dbClient.collection('users').findOne({username: name}).then(res => res)){
        console.log('UserExist');
        userExists = 'UserExists';
    }else{
        await dbClient.collection('users').insertOne({username: name, password: password, status: status, image: null}).then(res => console.log(res));

    }
    res.send({status: userExists});
    res.end();

}
export {submitNewUser};
