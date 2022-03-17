import {MainLayout, ScrollContainer} from "./styles";
import {NavigateTop} from "./navigation";
import {Header} from "../header";
import {LogInCard} from "../logIn";
import {Routes, Route} from "react-router-dom";
import {UsrProfile} from "../userProfile";
import React, {useState} from "react";
import {useEffect} from "react";
import {getCookie} from "../cookieScr/cookieUtils";
import {usrInit} from "../userProfile/scripts/usrInit";
import {PlacesTape} from "../placesTape";
import {PostTape} from "../postTape";
import {PlaceDetailed} from "../placesTape/placeDetailed";
import {Home} from "../home";
import {Footer} from "./footer";

const Main = () => {

    const [usrData, setUsrData] = useState({username: '', status: '', image: null});
    const [usrAuthorized, setAuthorized] = useState(false);
    useEffect(() => {
        if (getCookie('user') || getCookie('admin') || getCookie('moderator')) {
            if (!usrAuthorized) {
                setAuthorized(true);
            } else {
                usrInit('http://localhost:3003/home', setUsrData);
                console.log(usrData.username);
            }
        }
    }, [usrAuthorized]);


    console.log(usrAuthorized);
    return (
        <MainLayout>
            <Header isAuth={usrAuthorized} usrData={usrData}/>

            <ScrollContainer id='scrollable' >
                <Routes >
                    <Route path="/" element={<Home/>}/>
                    <Route path="/places/:id" element={<PlaceDetailed/>}/>
                    <Route path="/places" element={<PlacesTape  usrData={usrData} isAuth={usrAuthorized}/>}/>
                    <Route path="/news" element={<PostTape isAuth={usrAuthorized}/>}/>
                    {usrAuthorized ? <Route exact path="/profile"
                                            element={<UsrProfile auth={setAuthorized} isAuth={usrAuthorized}
                                                                 usrData={usrData} setUsrData={setUsrData}/>}/> : null}
                    <Route path="/log-in" element={<LogInCard auth={setAuthorized} isAuth={usrAuthorized}/>}/>
                </Routes>
            </ScrollContainer>

        </MainLayout>
    );
}
export {Main}
