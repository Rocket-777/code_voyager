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

import {useSelector, useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "../../reduxStore/reduxHooks";
import {fetchUser} from "../../reduxStore/reducers/Actions";
import {userSlice} from "../../reduxStore/reducers/userSlice";

const Main = () => {

    const [usrData, setUsrData] = useState({username: '', status: '', image: null});
    const [usrAuthorized, setAuthorized] = useState(false);

    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);
    const {setUserAuthorized} = userSlice.actions;

    useEffect(() => {

        if (getCookie('user') || getCookie('admin') || getCookie('moderator')) {
            if (!usrAuthorized) {
                setAuthorized(true);
                dispatch(setUserAuthorized());

            } else {
                dispatch(fetchUser());
                initializeUser(setUsrData).catch(e => console.log(e));
                console.log(usrData.username);
            }
        }
    }, [user.authorized]);



    return (
        <MainLayout>
            <Header isAuth={usrAuthorized} usrData={user.userData}/>

            <ScrollContainer id='scrollable' >
                <div style={{wordWrap:"break-word"}}>
                    {JSON.stringify(user)}
                </div>
                <Routes >
                    <Route path="/" element={<Home/>}/>
                    <Route path="/placesList/:id" element={<PlaceDetailed/>}/>
                    <Route path="/placesList" element={<PlacesTape  usrData={user.userData} isAuth={user.authorized}/>}/>
                    <Route path="/feed" element={<PostTape isAuth={user.authorized}/>}/>
                    <Route exact path="/profile"
                                            element={<UsrProfile auth={setAuthorized} isAuth={user.authorized} updateUsr={() => usrInit(`/home`, setUsrData)}
                                                                 usrData={usrData} setUsrData={setUsrData}/>}/>
                    <Route path="/log-in" element={<LogInCard auth={setAuthorized} isAuth={user.authorized}/>}/>
                    <Route path="/proposal" element={<EditPlace type='blank'/>}/>
                    <Route path='*' element={<h1>404_NOT_FOUND</h1>}/>
                </Routes>

            </ScrollContainer>

        </MainLayout>
    );
}
export {Main};
