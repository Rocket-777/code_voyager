
function getUser(cookie){

    if(cookie.user){
        return cookie.user;
    }
    else if(cookie.moderator){
        return cookie.moderator;
    }else if(cookie.admin){
        return cookie.admin;
    }
}

export {getUser}
