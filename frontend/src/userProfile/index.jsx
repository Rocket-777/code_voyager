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
import {StyledLink} from "../placesTape/styles";
import {PlaceCard} from "../placesTape/placeCard";
import {FavoriteActive} from "../actionButtons/styles";
import {Footer} from "../main/footer";
import {NavigateTop} from "../main/navigation";
import {Loader} from "../main/loading";

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
        const scrollPos = sessionStorage.getItem('scrollPosition');
        if(scrollPos){
            document.getElementById('userProfile').scrollTo(0, parseInt(scrollPos));
            sessionStorage.removeItem('scrollPosition');
        }
    }

    const handleTransition = () => {
        const scrollPos = document.getElementById('userProfile').scrollTop.toString();
        sessionStorage.setItem('scrollPosition', scrollPos);
    }

    function handleFile(event) {

        if (event.target.files && event.target.files[0]) {

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
            {isLoading ? <Loader/> : null}
            <NavigateTop elemId='userProfile'/>
            {!isLoading ? <StyledCard>
                <StyledHeader variant="h4">
                    Профиль пользователя
                </StyledHeader>
                <StyledRow>
                    <StyledSemiRow variant="h5">
                        Имя пользователя
                    </StyledSemiRow>
                    <StyledTypography>
                        {props.usrData.username}
                    </StyledTypography>
                </StyledRow>
                <StyledRow>
                    <StyledSemiRow variant="h5">
                        Статус
                    </StyledSemiRow>
                    <StyledTypography>
                        {props.usrData.status}
                    </StyledTypography>
                </StyledRow>
                <StyledImageOps>
                    <Avatar src={props.usrData.image} alt=':C' sx={{width: 300, height: 300}}/>

                    {props.usrData.image ?
                        <UploadButtonContainer>
                            <UploadButton color="secondary" variant="contained" onClick={e => handleRemoveImg()}
                                          sx={{backgroundColor: "red", ":hover": {backgroundColor: "crimson"}}}>
                                <DeleteOutlineOutlinedIcon sx={{marginRight: '1vw'}}/>
                                Удалить изображение
                            </UploadButton>
                        </UploadButtonContainer> :
                        <UploadButtonContainer>
                            <input id='imgInp'
                                   style={{display: "none"}}
                                   type="file"
                                   accept="image/*"
                                   onChange={e => handleFile(e)}
                            />
                            <UploadButton color="secondary" variant="contained" component="span">
                                <FileUploadOutlinedIcon sx={{marginRight: '1vw'}}/>
                                Загрузить изображение
                            </UploadButton>
                        </UploadButtonContainer>}

                </StyledImageOps>

                <StyledButton onClick={e => logOutAction(props.auth, navigate, props.setUsrData)}>
                    <LogoutOutlinedIcon sx={{marginRight: '0.4vw'}}/>
                    Выйти
                </StyledButton>
            </StyledCard> : null}

            {!isLoading ? <FavoriteContainer>
                {favorites.length > 0  ? <FavoritesHeader>
                    Избранное
                    <FavoriteActive/>
                </FavoritesHeader> : null}
                {favorites ? favorites.map(item =>
                    <StyledLink to={'/places/' + item._id} key={item._id}  onClick={e => handleTransition()} >

                        <PlaceCard  isAuth={props.isAuth} key={item._id} cardData={item} setPlaces={setFavorites} placesState={'approved'}
                                    updateFavorites={() => getFavorites(setFavorites, ac)}
                                    displayRemoveButton={props.usrData.status === 'Модератор' || props.usrData.status === 'Администратор'}/>
                    </StyledLink>) : null}

            </FavoriteContainer> : null}
            <Footer/>
        </Container>
        );

}


export {UsrProfile};
