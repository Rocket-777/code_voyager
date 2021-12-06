async function submitNewuser(dbClient, name, password, status){ //TODO connect with frontend
    await dbClient.connect();
    await dbClient.db("proj").command({ ping: 1 });
    console.log("@@ Connected successfully");
    await dbClient.db("proj").collection('users').insertOne({username: name, password: password, status: status}).then(res => console.log(res));
    await dbClient.close();
}
export {submitNewuser};