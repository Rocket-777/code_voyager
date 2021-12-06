

async function tryConnection(dbclient) {
    await dbclient.connect().then(res => console.log('$ Mongodb connection established!')).catch(e => console.log(e));
    await dbclient.close();
}

export {tryConnection};