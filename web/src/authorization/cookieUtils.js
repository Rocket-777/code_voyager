

async function cookieDenie(req, res, db){
    if(req.signedCookies.user){
        await res.clearCookie('user');
        await res.send('Logged Out!');
    }
    else if(req.signedCookies.moderator){
        await res.clearCookie('moderator');
        await res.send('Logged Out!');
    }
    else if(req.signedCookies.admin){
        await res.clearCookie('admin');
        await res.send('Logged Out!');
    }
    res.end();
}

export {cookieDenie}