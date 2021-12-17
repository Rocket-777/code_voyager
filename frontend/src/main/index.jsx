import {MainLayout} from "./styles";
import {Header} from "../header";
import {LogInCard} from "../logIn";
import {Routes, Route} from "react-router-dom";
import {UsrProfile} from "../userProfile";
import {useState} from "react";
import {useEffect} from "react";
import {getCookie} from "../cookieScr/cookieUtils";
import {usrInit} from "../userProfile/scripts/usrInit";
import {PlacesTape} from "../placesTape";


const Aaaa = () => {
    return(
        <a>AAAAAAAAAA</a>
    );
}




const Main = () => {
    const [usrData, setUsrData] = useState({username: '', status: '', image: null});
    const [usrAuthorized, setAuthorized] = useState(false);
    useEffect(() => {
        if(getCookie('user') || getCookie('admin') || getCookie('moderator')){
            if(!usrAuthorized){
                setAuthorized(true);

            }else{
                usrInit('http://localhost:3003/home', setUsrData);
                console.log(usrData.username);
            }

        }
    }, [usrAuthorized]);


    console.log(usrAuthorized);
    return(
        <MainLayout>
            <Header isAuth={usrAuthorized} usrData={usrData}/>
            <Routes>
                <Route exact path="/" element={<PlacesTape usrData={usrData} isAuth={usrAuthorized}/>}/>
                <Route exact path="/news" element={<Aaaa/>}/>
                {usrAuthorized ? <Route exact path="/profile" element={<UsrProfile auth={setAuthorized} isAuth={usrAuthorized} usrData={usrData} setUsrData={setUsrData}/>}/> : null}
                <Route exact path="/log-in" element={<LogInCard auth={setAuthorized} isAuth={usrAuthorized}/>}/>
            </Routes>

        </MainLayout>
    );
}

export {Main}