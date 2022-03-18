import {DividerTypography, StyledDivider} from "../styles";

const PrettyDivider = (props) => {

    return(
        <StyledDivider>
            <DividerTypography>
                {props.textVal}
            </DividerTypography>
        </StyledDivider>
    );

}

export {PrettyDivider}
