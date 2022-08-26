import {
    Container,
    FavoriteContainer,
    FavoritesHeader
} from "./styles";
import {fetchUser} from "../../reduxStore/reducers/Actions";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {removeUserImage, sendUserImage} from "./scripts/profileScripts";
import {StyledContainer} from "../placesTape/styles";
import {PlaceCard} from "../placesTape/placeCard";
import {FavoriteActive} from "../actionButtons/styles";
import {Footer} from "../main/footer";
import {NavigateTop} from "../main/navigation";
import {UserProfile} from "./userInfo";
import {useAppDispatch, useAppSelector} from "../../reduxStore/reduxHooks";
import {logOutAction, fetchFavorites} from "../../reduxStore/reducers/Actions";

const UsrProfile = () => {
    const user = useAppSelector(state => state.user);
    const places = useAppSelector(state => state.places)
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [thumbnail, setThumbnail] = useState("noImage.png")
    const [favorites, setFavorites] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    let ac = new AbortController();

    useEffect(()=>{
        dispatch(fetchFavorites(ac, handleScrollPos));
        //getFavoritesJS(setFavorites, ac).then(res => {if(!ac.signal.aborted){setIsLoading(false); handleScrollPos();}});
        return () => ac.abort();
    },[]);

    function handleLogOut(){
        dispatch(logOutAction(() => navigate('/log-in')));
    }

    const handleScrollPos = () => {
        const scrollPos = sessionStorage.getItem('scrollPositionFav');
        if(scrollPos){
            document.getElementById('userProfile').scrollTo(0, parseInt(scrollPos));
            sessionStorage.removeItem('scrollPositionFav');
        }
    }

    const handleTransition = () => {
        const scrollPos = document.getElementById('userProfile').scrollTop.toString();
        sessionStorage.setItem('scrollPositionFav', scrollPos);
    }

    async function handleFile(event) {

        if (event.target.files && event.target.files[0]) {
            handleRemoveImg();
            let reader = new FileReader();
            reader.onload = (ev) => {
                setThumbnail(ev.target.result);
            }
            reader.readAsDataURL(event.target.files[0]);

            const reqData = new FormData();
            reqData.append('image', event.target.files[0]);
            await sendUserImage(reqData).catch(e => console.log(e));
            dispatch(fetchUser());
        }
    }
    function handleRemoveImg() {
        removeUserImage();
    }
    return (
        <Container id='userProfile'>
            <NavigateTop elemId='userProfile'/>
            <UserProfile userName={user.userData.username} status={user.userData.status} avatar={user.userData.image}
            handleImage={handleFile} logoutAction={() => handleLogOut()}/>

            {!places.isLoading ? <FavoriteContainer>
                {places.data.length > 0  ? <FavoritesHeader>
                    Избранное
                    <FavoriteActive/>
                </FavoritesHeader> : null}
                {places.data ? places.data.map(item =>
                    <StyledContainer key={item._id}>

                        <PlaceCard  isAuth={user.authorized}  cardData={item}  placesState={'approved'}
                                    updateFavorites={() => dispatch(fetchFavorites(ac, handleScrollPos))} handleTransition={handleTransition}/>
                    </StyledContainer>) : null}

            </FavoriteContainer> : null}
            <Footer/>
        </Container>
        );

}


export {UsrProfile};
