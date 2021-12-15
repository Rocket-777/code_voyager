import {StyledCard, StyledHeader, ImageContainer, StyledDescription, NoImage, ButtonBlock, BlockButton} from "./styles";
import {useState} from "react";
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {removePlace} from "./scripst/placeRemoval";

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
            <ButtonBlock>
                <BlockButton color='secondary' variant='contained'>
                    <FavoriteBorderIcon/>
                    Нравится
                </BlockButton>
                <BlockButton variant='contained'>
                    <CommentOutlinedIcon/>
                    Комментарии
                </BlockButton>
                <BlockButton variant='contained'>
                    <StarBorderIcon/>
                    В избранное
                </BlockButton>
                {props.displayRemoveButton ? <BlockButton variant='contained' sx={{backgroundColor: "red", ":hover": {backgroundColor: "crimson"}}}
                onClick={e => removePlace(props.cardData._id, props.setPlaces)}>
                    <DeleteOutlineOutlinedIcon/>
                    Удалить
                </BlockButton> : null}
            </ButtonBlock>
        </StyledCard>
    );
}

export {PlaceCard}