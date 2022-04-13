import {
    BlockButton,
    ButtonBlock,
    ButtonBlockContainer,
    ImageContainer,
    NoImage,
    SkeletonContainer,
    SkeletonDesc,
    SkeletonHeader,
    SkeletonImgCont,
    SkeletonLogo,
    StyledCard,
    StyledDescription,
    StyledHeader
} from "./styles";

import {Skeleton} from "@mui/material";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import {approvePlace, favoriteAction, likeAction, removePlace} from "./scripst/placeCardScripts";
import {Comments} from "../comments";
import {SendComment} from "../comments/sendComment";
import {useEffect, useState} from "react";
import {getComments, updatePlaceData} from "../comments/scripts";
import {ActionButtons} from "../../actionButtons";
import {ReactComponent as Logo} from "../../assets/newLogo.svg"

const PlaceCard = (props) => {

    const [showComments, setShowComments] = useState(false);
    const [commentsData, setCommentsData] = useState('');
    const [placeData, setPlaceData] = useState(props.cardData);
    const [imgLoading, setImgLoading] = useState(true);
    let ac = new AbortController();

    useEffect(() => {
        if (!props.skeleton) {
            if (!props.cardData.image) {
                setImgLoading(false);
            }
        }

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

    if (!props.skeleton)
        return (
            <StyledCard>


                <ImageContainer>
                    {imgLoading ? <Skeleton width='100%' height='50vh' variant='rectangular' animation='wave'>
                        <SkeletonImgCont animation='wave' variant='rectangular'>
                            <SkeletonLogo/>
                        </SkeletonImgCont>
                    </Skeleton> : null}
                    {props.cardData.image ? <img src={props.cardData.image} alt=':(' onLoad={e => setImgLoading(false)}
                                                 hidden={imgLoading}/> :
                        <NoImage>
                            <Logo width={300}/>
                        </NoImage>}
                </ImageContainer>
                <StyledHeader variant='h4'>
                    {props.cardData.place_name ? props.cardData.place_name : "SAMLE_TEXT"}
                </StyledHeader>
                <StyledDescription>
                    {props.cardData.place_description ? props.cardData.place_description : "SAMPLE_TEXT"}
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
                                     updateData={() => updatePlaceData(placeData._id, setPlaceData, ac)}
                                     commentOf='places'/>
                    </div> : null
                }

            </StyledCard>

        );
    if (props.skeleton)
        return (
            <SkeletonContainer>
                <StyledCard>
                    <SkeletonImgCont animation='wave' variant='rectangular' >
                        <SkeletonLogo/>
                    </SkeletonImgCont>
                    <SkeletonHeader animation='wave'/>
                    <SkeletonDesc animation='wave'/>
                    <SkeletonDesc animation='wave'/>
                    <SkeletonDesc animation='wave'/>
                    <SkeletonDesc animation='wave'/>
                    <ActionButtons inactive={true} commentVisible={true} favoriteVisible={true}/>
                </StyledCard>
            </SkeletonContainer>
        );
}

export {PlaceCard}
