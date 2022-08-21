import {MainLayout, ScrollContainer} from "./styles";
import {Header} from "../header";
import {LogInCard} from "../logIn";
import {Routes, Route} from "react-router-dom";
import {UsrProfile} from "../userProfile";
import {useState} from "react";
import {useEffect} from "react";
import {getCookie} from "../../cookieScr/cookieUtils";
import {PlacesTape} from "../placesTape";
import {PostTape} from "../postTape";
import {PlaceDetailed} from "../placesTape/placeDetailed";
import {Home} from "../home";
import {EditPlace} from "../placesTape/detailedEdit";
import {initializeUser} from "./scripts";
import {usrInit} from "../userProfile/scripts/usrInit";
import {serverHost} from "../../httpUtils/envVals";

import {useSelector, useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "../../reduxStore/reduxHooks";
import {fetchUser} from "../../reduxStore/reducers/Actions";

const Main = () => {

    const [usrData, setUsrData] = useState({username: '', status: '', image: null});
    const [usrAuthorized, setAuthorized] = useState(false);

    const dispatch = useAppDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUser());
        if (getCookie('user') || getCookie('admin') || getCookie('moderator')) {
            if (!usrAuthorized) {
                setAuthorized(true);
            } else {
                initializeUser(setUsrData).catch(e => console.log(e));
                console.log(usrData.username);
            }
        }
    }, [usrAuthorized]);



    return (
        <MainLayout>
            <Header isAuth={usrAuthorized} usrData={usrData}/>

            <ScrollContainer id='scrollable' >
                <div>
                    {JSON.stringify(user)}
                </div>
                <Routes >
                    <Route path="/" element={<Home/>}/>
                    <Route path="/placesList/:id" element={<PlaceDetailed/>}/>
                    <Route path="/placesList" element={<PlacesTape  usrData={usrData} isAuth={usrAuthorized}/>}/>
                    <Route path="/feed" element={<PostTape isAuth={usrAuthorized}/>}/>
                    <Route exact path="/profile"
                                            element={<UsrProfile auth={setAuthorized} isAuth={usrAuthorized} updateUsr={() => usrInit(`${serverHost}/home`, setUsrData)}
                                                                 usrData={usrData} setUsrData={setUsrData}/>}/>
                    <Route path="/log-in" element={<LogInCard auth={setAuthorized} isAuth={usrAuthorized}/>}/>
                    <Route path="/proposal" element={<EditPlace type='blank'/>}/>
                    <Route path='*' element={<h1>404_NOT_FOUND</h1>}/>
                </Routes>

            </ScrollContainer>

        </MainLayout>
    );
}
export {Main};
