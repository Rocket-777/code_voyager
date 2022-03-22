import {StyledCard, StyledHeader, ImageContainer, StyledDescription, NoImage, ButtonBlock, BlockButton,
ButtonBlockContainer} from "./styles";
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import {removePlace, approvePlace} from "./scripst/placeCardScripts";
import {Comments} from "../comments";
import {SendComment} from "../comments/sendComment";
import {useEffect, useState} from "react";
import {getComments} from "../comments/scripts";
import {likeAction} from "./scripst/placeCardScripts";
import {updatePlaceData} from "../comments/scripts";
import {ActionButtons} from "../../actionButtons";


const PlaceCard = (props) => {

    const [showComments, setShowComments] = useState(false);
    const [commentsData, setCommentsData] = useState('');
    const [placeData, setPlaceData] = useState(props.cardData);

    useEffect(()=>{
        if(showComments){
            getComments(setCommentsData, props.cardData._id);
        }
    }, [showComments])

    async function handleLike(){
        await likeAction(placeData._id);
        await updatePlaceData(placeData._id, setPlaceData)
    }
    return(
        <StyledCard >

            <StyledHeader variant='h4' >
                {props.cardData.place_name}
            </StyledHeader>
            <ImageContainer>
                { props.cardData.image? <img src={props.cardData.image} alt=':('/> : <NoImage variant='h1'>No_Image</NoImage>}
            </ImageContainer>
            <StyledDescription >
                {props.cardData.place_description}
            </StyledDescription>
            {props.isAuth ? <ButtonBlockContainer>
                {props.cardData.approved ? <ButtonBlock>
                    {/*<BlockButton color='secondary' variant='contained' onClick={e => {e.preventDefault(); handleLike();}}> /!* preventdefault - prevents button from acting as a link!!!*!/*/}
                    {/*    <FavoriteBorderIcon sx={{marginRight: '0.4vw'}}/>*/}
                    {/*    {placeData.likes}*/}
                    {/*</BlockButton>*/}
                    {/*<BlockButton variant='contained' onClick={e => {e.preventDefault(); setShowComments(!showComments)} }>*/}
                    {/*    <CommentOutlinedIcon sx={{marginRight: '0.4vw'}}/>*/}
                    {/*    {placeData.comments}*/}
                    {/*</BlockButton>*/}
                    {/*<BlockButton variant='contained'>*/}
                    {/*    <StarBorderIcon  sx={{marginRight: '0.4vw'}}/>*/}
                    {/*    В избранное*/}
                    {/*</BlockButton>*/}

                </ButtonBlock> : <ButtonBlock>
                    <BlockButton color='secondary' variant='contained'
                                 onClick={e => {e.preventDefault(); approvePlace(props.cardData._id, props.setPlaces, props.placesState)}}>
                        <CheckOutlinedIcon sx={{marginRight: '0.4vw'}}/>
                        Утвердить
                    </BlockButton>
                    <BlockButton variant='contained' sx={{backgroundColor: "red", ":hover": {backgroundColor: "crimson"}}}
                                 onClick={e => {e.preventDefault(); removePlace(props.cardData._id, props.setPlaces, props.placesState)}}>
                        <ClearOutlinedIcon sx={{marginRight: '0.4vw'}}/>
                        Отказать
                    </BlockButton>
                </ButtonBlock>}
            </ButtonBlockContainer> : null}
            <ActionButtons likeCount={placeData.likes} commentCount={placeData.comments} isLiked={placeData.isLiked}
                           likeAction={handleLike} commentAction={() => setShowComments(!showComments)} favoriteVisible={true}
                           removeAction={() => removePlace(props.cardData._id, props.setPlaces, props.placesState)} removeVisible={props.displayRemoveButton}/>

            {
                showComments ? <div onClick={e=> e.preventDefault()}>
                    <Comments data={commentsData}/>
                    <SendComment updateComments={setCommentsData} id={props.cardData._id} updatePlaceData={setPlaceData}/>
                </div> : null
            }

        </StyledCard>

    );
}

export {PlaceCard}
