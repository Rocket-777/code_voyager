import {StyledCard, StyledHeader, ImageContainer, StyledDescription, NoImage, ButtonBlock, BlockButton} from "./styles";
import {useState} from "react";
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

const PlaceCard = (props) => {

    return(
        <StyledCard>
            <StyledHeader variant='h2'>
                {props.cardData.place_name}
            </StyledHeader>
            <ImageContainer>
                { props.cardData.image.data ? <img src={`data:image/*; base64, ${props.cardData.image.data.buffer}`} alt=':('/> : <NoImage variant='h1'>No_Image</NoImage>}
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
            </ButtonBlock>
        </StyledCard>
    );
}

export {PlaceCard}