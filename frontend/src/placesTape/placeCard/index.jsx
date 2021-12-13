import {StyledCard, StyledHeader} from "./styles";
import {useState} from "react";

const PlaceCard = (props) => {

    return(
        <StyledCard>
            <StyledHeader>
                {props.cardData.place_name}
            </StyledHeader>

            { props.cardData.image.data ? <img src={`data:image/*; base64, ${props.cardData.image.data.buffer}`} alt=':('/> : null}
            <StyledHeader>
                {props.cardData.place_description}
            </StyledHeader>
        </StyledCard>
    );
}

export {PlaceCard}