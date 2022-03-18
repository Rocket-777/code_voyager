import {useParams} from "react-router-dom";
import {Container, StyledCard, StyledHeader, ShortDescription, FullDescription, Info, CommentContainer} from "./styles";
import {ImageContainer, NoImage} from "../placeCard/styles";
import {Footer} from "../../main/footer";
import {getPlaceById} from "./scripts";
import {useEffect, useState} from "react";
import {NavigateBack} from "../../main/navigation";


const PlaceDetailed = () => {

    const [placeData, setPlaceData] = useState('');
    const params = useParams();

    useEffect(()=>{
        getPlaceById(params.id, setPlaceData);
    }, [])
    if(!placeData.error){
        return(
            <Container>
                <NavigateBack/>
                <StyledCard>
                    <StyledHeader variant='h4'>{placeData.place_name}</StyledHeader>
                    <ImageContainer>
                        {placeData.image ? <img src={placeData.image} alt='image'/> : <NoImage variant='h1'>No_Image</NoImage>}
                    </ImageContainer>
                    <StyledHeader variant='h5'>Рецензия</StyledHeader>
                    <ShortDescription>{placeData.place_description}</ShortDescription>
                    <StyledHeader variant='h5'>Полное описание</StyledHeader>
                    <FullDescription>{'PLACE_ID: ' + params.id + ' _fullDescription'}</FullDescription>
                    <StyledHeader variant='h5'>Адрес и контакты</StyledHeader>
                    <ImageContainer>
                        <NoImage variant='h2'>MAP_PLACEHOLDER</NoImage>
                    </ImageContainer>
                    <Info>{'PLACE_ID: ' + params.id + ' _info'}</Info>
                    <CommentContainer>
                        {'PLACE_ID: ' + params.id + ' commentContainer'}
                    </CommentContainer>
                </StyledCard>
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
