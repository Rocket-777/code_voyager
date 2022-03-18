import {StyledFooter} from "./styles";

const Footer = () => {

    return(<StyledFooter>
        <h3 style={{fontStyle: 'Italic'}}>
            Voyager
        </h3>

        <img src="/logoHeader.png" alt='logo' width={90} style={{marginLeft: '1vw', marginRight: '1vw'}}/>
    </StyledFooter>);

}

export {Footer}
