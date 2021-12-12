import {StyledCard, StyledHeader} from "./styles";

const PlaceCard = (props) => {
    return(
        <StyledCard>
            <StyledHeader>
                {props.text}
            </StyledHeader>
        </StyledCard>

    );
}

export {PlaceCard}