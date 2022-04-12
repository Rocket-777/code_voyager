import {
    BlockButton,
    ButtonBlock,
    ButtonBlockContainer,
    ImageContainer,
    NoImage,
    StyledCard,
    StyledDescription,
    StyledHeader
} from "./styles";


import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import {approvePlace, favoriteAction, likeAction, removePlace} from "./scripst/placeCardScripts";
import {Comments} from "../comments";
import {SendComment} from "../comments/sendComment";
import {useEffect, useState} from "react";
import {getComments, updatePlaceData} from "../comments/scripts";
import {ActionButtons} from "../../actionButtons";


const PlaceCard = (props) => {

    const [showComments, setShowComments] = useState(false);
    const [commentsData, setCommentsData] = useState('');
    const [placeData, setPlaceData] = useState(props.cardData);
    let ac = new AbortController();

    useEffect(() => {

        if (showComments) {
            getComments(setCommentsData, props.cardData._id, ac);
        }
        return () => ac.abort();
    }, [showComments])

    async function handleLike() {
        await likeAction(placeData._id);
        await updatePlaceData(placeData._id, setPlaceData, ac)
    }

    async function handleFavorite() {
        await favoriteAction(placeData._id);
        if (!props.updateFavorites) {
            await updatePlaceData(placeData._id, setPlaceData, ac);
        }
        if (props.updateFavorites) {
            props.updateFavorites();
        }
    }

    return (
        <StyledCard>


            <ImageContainer>
                {props.cardData.image ? <img src={props.cardData.image} alt=':('/> :
                    <NoImage variant='h1'>No_Image</NoImage>}
            </ImageContainer>
            <StyledHeader variant='h4'>
                {props.cardData.place_name}
            </StyledHeader>
            <StyledDescription>
                {props.cardData.place_description}
            </StyledDescription>
            {props.isAuth ? <ButtonBlockContainer>
                {props.cardData.approved ? null : <ButtonBlock>
                    <BlockButton color='secondary' variant='contained'
                                 onClick={e => {
                                     e.preventDefault();
                                     approvePlace(props.cardData._id, props.setPlaces, props.placesState, ac)
                                 }}>
                        <CheckOutlinedIcon sx={{marginRight: '0.4vw'}}/>
                        Утвердить
                    </BlockButton>
                    <BlockButton variant='contained'
                                 sx={{backgroundColor: "red", ":hover": {backgroundColor: "crimson"}}}
                                 onClick={e => {
                                     e.preventDefault();
                                     removePlace(props.cardData._id, props.setPlaces, props.placesState, ac)
                                 }}>
                        <ClearOutlinedIcon sx={{marginRight: '0.4vw'}}/>
                        Отказать
                    </BlockButton>
                </ButtonBlock>}
            </ButtonBlockContainer> : null}
            <ActionButtons likeCount={placeData.likes} commentCount={placeData.comments} isLiked={placeData.isLiked}
                           likeAction={() => handleLike()} commentAction={() => setShowComments(!showComments)}
                           favoriteVisible={true}
                           removeAction={() => removePlace(props.cardData._id, props.setPlaces, props.placesState, ac)}
                           removeVisible={props.displayRemoveButton} commentVisible={true}
                           favoriteAction={() => handleFavorite()} isFavorite={placeData.isFavorite}/>

            {
                showComments ? <div onClick={e => e.preventDefault()}>
                    <Comments data={commentsData}/>
                    <SendComment ac={ac} updateComments={setCommentsData} id={props.cardData._id}
                                 updateData={() => updatePlaceData(placeData._id, setPlaceData, ac)} commentOf='places'/>
                </div> : null
            }

        </StyledCard>

    );
}

export {PlaceCard}
