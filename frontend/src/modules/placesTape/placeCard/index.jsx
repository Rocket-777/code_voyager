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
    StyledHeader,
    StyledLink
} from "./styles";

import {Skeleton} from "@mui/material";
import {favoriteAction, likeAction} from "./scripst/placeCardScripts";
import {Comments} from "../comments";
import {SendComment} from "../comments/sendComment";
import {useEffect, useState} from "react";
import {getComments, updatePlaceData} from "../comments/scripts";
import {ActionButtons} from "../../actionButtons";
import Logo from "../../../assets/newLogo.svg"
import React from "react";



const PlaceCard =  (props) => {

    const [showComments, setShowComments] = useState(false);
    const [commentsData, setCommentsData] = useState('');
    const [placeData, setPlaceData] = useState(props.cardData);
    const [imgLoading, setImgLoading] = useState(true);

    const ac = new AbortController();

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

                <StyledLink to={'/placesList/' + props.cardData._id} onClick={e => props.handleTransition()}
                            key={props.cardData._id}>
                    <ImageContainer>
                        {imgLoading ? <Skeleton width='100%' height='50vh' variant='rectangular' animation='wave'>
                            <SkeletonImgCont animation='wave' variant='rectangular'>
                                <SkeletonLogo/>
                            </SkeletonImgCont>
                        </Skeleton> : null}
                        {props.cardData.image ?
                            <img src={props.cardData.image} alt=':(' onLoad={e => setImgLoading(false)}
                                 hidden={imgLoading}/> :
                            <NoImage>
                                <Logo height='50%'/>
                            </NoImage>}
                    </ImageContainer>
                    <StyledHeader variant='h4'>
                        {props.cardData.place_name ? props.cardData.place_name : "SAMLE_TEXT"}
                    </StyledHeader>
                </StyledLink>

                <StyledDescription>
                    {props.cardData.place_description ? props.cardData.place_description : "SAMPLE_TEXT"}
                </StyledDescription>

                    <ActionButtons likeCount={placeData.likes} commentCount={placeData.comments} isLiked={placeData.isLiked}
                                   likeAction={() => handleLike()} commentAction={() => setShowComments(!showComments)}
                                   favoriteVisible={true}
                                   commentVisible={true}
                                   favoriteAction={() => handleFavorite()} isFavorite={placeData.isFavorite}/>



                {
                    showComments ? <div onClick={e => {
                        e.preventDefault();
                    }}>
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
                    <SkeletonImgCont animation='wave' variant='rectangular'>
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
    return null;
}

export {PlaceCard}
