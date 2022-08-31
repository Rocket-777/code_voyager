async function submitNewUser(dbClient, name, password, status, res){
    await dbClient.command({ ping: 1 });
    console.log("@@ Connected successfully");
    let resMess = 'success';
    if(name.length >= 4 && password.length >= 6){
        if(await dbClient.collection('users').findOne({username: name}).then(res => res)){
            console.log('UserExist');
            resMess = 'UserExists';
        }else{
            await dbClient.collection('users').insertOne({username: name, password: password, status: status, image: null, favorites: []}).then(res => console.log(res));

        }
    }
    else{
        resMess = 'Short username or short password'
    }

    res.send({status: resMess});
    res.end();

}
export {submitNewUser};
