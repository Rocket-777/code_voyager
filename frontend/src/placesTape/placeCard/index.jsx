import {StyledCard, StyledHeader, ImageContainer, StyledDescription, NoImage} from "./styles";
import {useState} from "react";

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
        </StyledCard>
    );
}

export {PlaceCard}