import {StyledFooter} from "./styles";
import {Typography} from "@mui/material";

const Footer = () => {

    return(<StyledFooter>
        <Typography style={{fontStyle: 'Italic'}}>
            Voyager
        </Typography>

        <img src="/logoHeader.png" alt='logo' width={90} style={{marginLeft: '1vw', marginRight: '1vw'}}/>
    </StyledFooter>);

}

export {Footer}
