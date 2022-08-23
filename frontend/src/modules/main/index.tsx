import {MainLayout, ScrollContainer} from "./styles";
import {Header} from "../header";
import {LogInCard} from "../logIn";
import {Routes, Route} from "react-router-dom";
import {UsrProfile} from "../userProfile";
import {useEffect} from "react";
import {getCookie} from "../../cookieScr/cookieUtils";
import {PlacesTape} from "../placesTape";
import {PostTape} from "../postTape";
import {PlaceDetailed} from "../placesTape/placeDetailed";
import {Home} from "../home";
import {EditPlace} from "../placesTape/detailedEdit"


import {useSelector, useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "../../reduxStore/reduxHooks";
import {fetchUser} from "../../reduxStore/reducers/Actions";
import {userSlice} from "../../reduxStore/reducers/userSlice";

const Main = () => {

    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);
    const {setUserAuthorized} = userSlice.actions;

    useEffect(() => {
        if (getCookie('user') || getCookie('admin') || getCookie('moderator')) {
            dispatch(setUserAuthorized());
            dispatch(fetchUser());
        }
    }, [user.authorized]);


    return (
        <MainLayout>
            <Header isAuth={user.authorized} usrData={user.userData}/>
            {JSON.stringify(user)}
            <ScrollContainer id='scrollable'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/placesList/:id" element={<PlaceDetailed/>}/>
                    <Route path="/placesList" element={<PlacesTape usrData={user.userData} isAuth={user.authorized}/>}/>
                    <Route path="/feed" element={<PostTape isAuth={user.authorized}/>}/>
                    <Route path="/profile" element={<UsrProfile isAuth={user.authorized} usrData={user.userData}/>}/>
                    <Route path="/log-in" element={<LogInCard/>}/>
                    <Route path="/proposal" element={<EditPlace type='blank' editableData={undefined}
                                                                toggleEdit={undefined} snack={undefined}
                                                                renewData={undefined}/>}/>
                    <Route path='*' element={<h1>404_NOT_FOUND</h1>}/>
                </Routes>

            </ScrollContainer>

        </MainLayout>
    );
}
export {Main};
