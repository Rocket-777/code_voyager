import {useParams} from "react-router-dom";
import {Container, StyledCard, StyledHeader, ShortDescription,
    FullDescription, Info, ActionButtonContainer} from "./styles";
import {ImageContainer, NoImage} from "../placeCard/styles";
import {MarginContainer} from "../comments/sendComment/styles";
import {Footer} from "../../main/footer";
import {getPlaceById} from "./scripts";
import React, {useEffect, useState} from "react";
import {NavigateBack, NavigateTop} from "../../main/navigation";
import {Comments} from "../comments";
import {SendComment} from "../comments/sendComment";
import {getComments} from "../comments/scripts";
import {PrettyDivider} from "./divider";
import {ActionButtons} from "../../actionButtons";
import {likeAction, favoriteAction} from "../placeCard/scripst/placeCardScripts";
import {Loader} from "../../main/loading";

const PlaceDetailed = (props) => {

    const [placeData, setPlaceData] = useState('');
    const [commentsData, setCommentsData] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();

    async function handleLike(){
        await likeAction(placeData._id);
        await getPlaceById(params.id, setPlaceData);
    }

    async function handleFavorite(){
        await favoriteAction(placeData._id);
        await getPlaceById(params.id, setPlaceData);
    }

    useEffect(()=>{
        getPlaceById(params.id, setPlaceData).then(res => setIsLoading(false));
    }, [])


    useEffect(()=>{
       getComments(setCommentsData, params.id);

    }, [])


    if(!placeData.error && !isLoading){
        return(
            <Container id='detailedPlace'>
                <NavigateTop elemId='detailedPlace'/>
                <NavigateBack />
                <StyledCard>
                    <StyledHeader variant='h4'>{placeData.place_name}</StyledHeader>
                    <ImageContainer>
                        {placeData.image ? <img src={placeData.image} alt='image'/> : <NoImage variant='h1'>No_Image</NoImage>}
                    </ImageContainer>
                    <PrettyDivider textVal='Рецензия'/>
                    <ShortDescription>{placeData.place_description}</ShortDescription>
                    <PrettyDivider textVal='Полное описание'/>
                    <FullDescription>{'PLACE_ID: ' + params.id + ' _fullDescription'}</FullDescription>
                    <PrettyDivider textVal='Адрес и контакты'/>
                    <ImageContainer>
                        <NoImage variant='h2'>MAP_PLACEHOLDER</NoImage>
                    </ImageContainer>
                    <Info>{'PLACE_ID: ' + params.id + ' _info'}</Info>
                    <ActionButtonContainer>
                        <ActionButtons favoriteVisible={true} isFavorite={placeData.isFavorite}
                                       isLiked={placeData.isLiked} removeVisible={false}
                                       likeCount={placeData.likes} likeAction={() => handleLike()} favoriteAction={() => handleFavorite()}/>
                    </ActionButtonContainer>

                    <Comments data={commentsData}/>

                </StyledCard>
                <MarginContainer>
                    <SendComment id={params.id} updateComments={setCommentsData} updatePlaceData={null}/>
                </MarginContainer>
                <Footer/>
            </Container>
        );
    }
    else if(placeData.error){
        return(
            <h1>{placeData.error}</h1>
        );
    } else if(isLoading){
        return(
            <Container>
                <Loader/>
                <Footer/>
            </Container>
        );
    }

}

export {PlaceDetailed}
