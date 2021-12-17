async function submitNewUser(dbClient, name, password, status){ //TODO connect with frontend
    //await dbClient.connect();
    await dbClient.command({ ping: 1 });
    console.log("@@ Connected successfully");
    await dbClient.collection('users').insertOne({username: name, password: password, status: status, image: null}).then(res => console.log(res));
    //await dbClient.close();
}
export {submitNewUser};