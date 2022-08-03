import {StyledHeader, StyledButton, StyledUserButton} from "./styles";
import {Link} from "react-router-dom";
import {linkstyle} from "./styles";
import {Avatar} from "@mui/material";
import Logo from "../assets/newLogo.svg"

const Header = (props) => {
    const usrImage = props.usrData.image ? props.usrData.image : null;

    return (

        <StyledHeader  >
            <Logo height={35} style={{marginLeft: '1rem', marginRight: '1rem'}} />
            <Link to='/placesList' style={linkstyle}>
                <StyledButton >
                    Главная
                </StyledButton>
            </Link>

            <Link to='/feed' style={linkstyle}>
            <StyledButton >
                    Лента
            </StyledButton>
            </Link>

                {props.isAuth ? <Link to='/profile' style={{...linkstyle, marginLeft: "auto"}}>
                    <StyledUserButton>
                        <Avatar src={usrImage} sx={{marginRight: "1vw", width: 35, height: 35}}/>
                        {props.usrData.username ? props.usrData.username : 'Loading...'}
                    </StyledUserButton>
                </Link>
                    : <Link to='/log-in' style={{...linkstyle, marginLeft: "auto"}}>
                        <StyledUserButton>
                        Войти/Зарегистрироваться
                        </StyledUserButton>
                    </Link>}


        </StyledHeader>
    );

}

export {Header}
