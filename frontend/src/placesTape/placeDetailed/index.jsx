import {useParams} from "react-router-dom";
import {Container, StyledCard, StyledHeader, ShortDescription, FullDescription, Info} from "./styles";
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

const PlaceDetailed = () => {

    const [placeData, setPlaceData] = useState('');
    const [commentsData, setCommentsData] = useState('');
    const params = useParams();

    useEffect(()=>{
        getPlaceById(params.id, setPlaceData);
    }, [])


    useEffect(()=>{
       getComments(setCommentsData, params.id);
    }, [])

    if(!placeData.error){
        return(
            <Container id='detailedPlace'>
                <NavigateTop elemId='detailedPlace'/>
                <NavigateBack/>
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
                    <Comments data={commentsData}/>


                </StyledCard>
                <MarginContainer>
                    <SendComment id={params.id} updateComments={setCommentsData} updatePlaceData={null}/>
                </MarginContainer>

                <Footer/>
            </Container>
        );
    }
    else{
        return(
            <h1>{placeData.error}</h1>
        );
    }

}

export {PlaceDetailed}
