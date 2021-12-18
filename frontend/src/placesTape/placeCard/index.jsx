import {StyledCard, StyledHeader, ImageContainer, StyledDescription, NoImage, ButtonBlock, BlockButton,
ButtonBlockContainer} from "./styles";
import {useState} from "react";
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

import {removePlace, approvePlace} from "./scripst/placeCardScripts";

const PlaceCard = (props) => {

    return(
        <StyledCard>
            <StyledHeader variant='h2'>
                {props.cardData.place_name}
            </StyledHeader>
            <ImageContainer>
                { props.cardData.image? <img src={props.cardData.image} alt=':('/> : <NoImage variant='h1'>No_Image</NoImage>}
            </ImageContainer>
            <StyledDescription >
                {props.cardData.place_description}
            </StyledDescription>
            {props.isAuth ? <ButtonBlockContainer>
                {props. cardData.approved ? <ButtonBlock>
                    <BlockButton color='secondary' variant='contained'>
                        <FavoriteBorderIcon sx={{marginRight: '0.4vw'}}/>
                        Нравится
                    </BlockButton>
                    <BlockButton variant='contained'>
                        <CommentOutlinedIcon sx={{marginRight: '0.4vw'}}/>
                        Комментарии
                    </BlockButton>
                    <BlockButton variant='contained'>
                        <StarBorderIcon  sx={{marginRight: '0.4vw'}}/>
                        В избранное
                    </BlockButton>
                    {props.displayRemoveButton ? <BlockButton variant='contained' sx={{backgroundColor: "red", ":hover": {backgroundColor: "crimson"}}}
                                                              onClick={e => removePlace(props.cardData._id, props.setPlaces)}>
                        <DeleteOutlineOutlinedIcon sx={{marginRight: '0.4vw'}}/>
                        Удалить
                    </BlockButton> : null}
                </ButtonBlock> : <ButtonBlock>
                    <BlockButton color='secondary' variant='contained'
                                 onClick={e => approvePlace(props.cardData._id, props.setPlaces)}>
                        <CheckOutlinedIcon sx={{marginRight: '0.4vw'}}/>
                        Утвердить
                    </BlockButton>
                    <BlockButton variant='contained' sx={{backgroundColor: "red", ":hover": {backgroundColor: "crimson"}}}
                                 onClick={e => removePlace(props.cardData._id, props.setPlaces)}>
                        <ClearOutlinedIcon sx={{marginRight: '0.4vw'}}/>
                        Отказать
                    </BlockButton>
                </ButtonBlock>}
            </ButtonBlockContainer> : null}

        </StyledCard>
    );
}

export {PlaceCard}