import {DividerTypography, StyledDivider} from "../styles";
import {CommentSign} from "../../comments/styles";

const PrettyDivider = (props) => {

    if(props.textVal || props.sign)
        return(
        <StyledDivider>
            <DividerTypography>
                {props.sign ? <CommentSign/> : null}
                {props.textVal}
            </DividerTypography>
        </StyledDivider>
    );
    else return(
      <StyledDivider/>
    );

}

export {PrettyDivider}
