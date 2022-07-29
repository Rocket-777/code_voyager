import {
    StyledButton,
    StyledCard,
    StyledHeader,
    StyledImageOps,
    StyledRow,
    StyledSemiRow,
    StyledTypography,
    UploadButton,
    UploadButtonContainer,
    Container,
    FavoriteContainer,
    FavoritesHeader
} from "./styles";
import {logOutAction} from "../logIn/scripts/logOutRequest";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Avatar} from "@mui/material";
import {removeUserImage, sendUserImage} from "./scripts/profileScripts";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {getFavorites} from "../placesTape/scripts/placesUtils";
import {StyledContainer} from "../placesTape/styles";
import {PlaceCard} from "../placesTape/placeCard";
import {FavoriteActive} from "../actionButtons/styles";
import {Footer} from "../main/footer";
import {NavigateTop} from "../main/navigation";
import {UserProfile} from "./userInfo";

const UsrProfile = (props) => {

    const navigate = useNavigate();

    const [thumbnail, setThumbnail] = useState("noImage.png")
    const [favorites, setFavorites] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    let ac = new AbortController();
    useEffect(()=>{

        getFavorites(setFavorites, ac).then(res => {if(!ac.signal.aborted){setIsLoading(false); handleScrollPos();}});
        return () => ac.abort();
    },[]);

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

    function handleFile(event) {

        if (event.target.files && event.target.files[0]) {
            handleRemoveImg();
            let reader = new FileReader();
            reader.onload = (ev) => {
                setThumbnail(ev.target.result);
            }
            reader.readAsDataURL(event.target.files[0]);

            const reqData = new FormData();
            reqData.append('image', event.target.files[0]);
            sendUserImage(reqData, props.auth).catch(e => console.log(e));

        }
    }

    function handleRemoveImg() {
        removeUserImage(props.auth);
    }

    return (
        <Container id='userProfile'>
            <NavigateTop elemId='userProfile'/>
            <UserProfile userName={props.usrData.username} status={props.usrData.status} avatar={props.usrData.image}
            handleImage={handleFile} logoutAction={() => logOutAction(props.auth, navigate, props.setUsrData)}/>


            {!isLoading ? <FavoriteContainer>
                {favorites.length > 0  ? <FavoritesHeader>
                    Избранное
                    <FavoriteActive/>
                </FavoritesHeader> : null}
                {favorites ? favorites.map(item =>
                    <StyledContainer >

                        <PlaceCard  isAuth={props.isAuth} key={item._id} cardData={item} setPlaces={setFavorites} placesState={'approved'}
                                    updateFavorites={() => getFavorites(setFavorites, ac)} handleTransition={handleTransition}
                                    displayRemoveButton={props.usrData.status === 'Модератор' || props.usrData.status === 'Администратор'}/>
                    </StyledContainer>) : null}

            </FavoriteContainer> : null}
            <Footer/>
        </Container>
        );

}


export {UsrProfile};
