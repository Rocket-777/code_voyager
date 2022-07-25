import {useParams} from "react-router-dom";
import {
    ActionButtonContainer,
    Container,
    FullDescription,
    Info,
    MapContainer,
    ShortDescription,
    StyledCard,
    StyledHeader
} from "./styles";
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
import {favoriteAction, likeAction} from "../placeCard/scripst/placeCardScripts";


import {Map, Placemark, YMaps} from "react-yandex-maps";

const PlaceDetailed = (props) => {

    const [placeData, setPlaceData] = useState('');
    const [commentsData, setCommentsData] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [markerPos, setMarker] = useState([54.514, 36.26]);
    const params = useParams();
    let ac = new AbortController();

    async function handleLike() {
        await likeAction(placeData._id);
        await getPlaceById(params.id, setPlaceData, ac);
    }

    async function handleFavorite() {
        await favoriteAction(placeData._id);
        await getPlaceById(params.id, setPlaceData, ac);
    }

    useEffect(() => {

        getPlaceById(params.id, setPlaceData, ac).then(res => {
            if (!ac.signal.aborted) setIsLoading(false)
        });
        getComments(setCommentsData, params.id, ac);
        return () => ac.abort();
    }, [])


    if (!placeData.error && !isLoading ) {
        return (
            <Container id='detailedPlace'>
                <NavigateTop elemId='detailedPlace'/>
                <NavigateBack/>
                <StyledCard>

                    <ImageContainer>
                        {placeData.image ? <img src={placeData.image} alt='image'/> :
                            <NoImage variant='h1'>No_Image</NoImage>}
                    </ImageContainer>
                    <StyledHeader variant='h4'>{placeData.place_name}</StyledHeader>
                    <PrettyDivider textVal='Рецензия'/>
                    <ShortDescription>{placeData.place_description}</ShortDescription>
                    <PrettyDivider textVal='Полное описание'/>
                    <FullDescription>{'PLACE_ID: ' + params.id + ' _fullDescription'}</FullDescription>
                    <PrettyDivider textVal='Адрес и контакты'/>
                    {/*<ImageContainer>*/}
                    {/*    <NoImage variant='h2'>MAP_PLACEHOLDER</NoImage>*/}
                    {/*</ImageContainer>*/}

                    <MapContainer>
                        <YMaps>
                            {/*onDragEnd={e => console.log(e.get('target').geometry.getCoordinates())}*/}

                            <Map defaultState={{center: markerPos, zoom: 14}} width='100%' height='60vh'>
                                <Placemark id='placemark' geometry={markerPos} options={{draggable: true}}
                                           onDragEnd={e => {
                                               console.log(e.get('target').geometry.getCoordinates());
                                               setMarker(e.get('target').geometry.getCoordinates());
                                           }}/>
                            </Map>


                            <div>{markerPos[0]}</div>
                            <div>{markerPos[1]}</div>
                        </YMaps>
                    </MapContainer>
                    <Info>{'PLACE_ID: ' + params.id + ' _info'}</Info>
                    <ActionButtonContainer>
                        <ActionButtons favoriteVisible={true} isFavorite={placeData.isFavorite}
                                       isLiked={placeData.isLiked} removeVisible={false}
                                       likeCount={placeData.likes} likeAction={() => handleLike()}
                                       favoriteAction={() => handleFavorite()}/>
                    </ActionButtonContainer>

                    <Comments data={commentsData}/>

                </StyledCard>
                <MarginContainer>
                    <SendComment id={params.id} commentOf='places' updateComments={setCommentsData}
                                 updatePlaceData={null} ac={ac}/>
                </MarginContainer>
                <Footer/>
            </Container>
        );
    } else if (placeData.error) {
        return (
            <h1>{placeData.error}</h1>
        );
    }
    else{
        return(
            <div>asd</div>
        )

    }

}

export {PlaceDetailed}
