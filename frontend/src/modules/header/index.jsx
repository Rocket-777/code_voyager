import {StyledHeader, StyledButton, StyledUserButton} from "./styles";
import {Link} from "react-router-dom";
import {linkstyle} from "./styles";
import {Avatar} from "@mui/material";
import Logo from "../../assets/newLogo.svg"
import {useAppSelector} from "../../reduxStore/reduxHooks";
const Header = (props) => {
    const user = useAppSelector((state) => state.user);
    const usrImage = user.userData.image ? user.userData.image : null;

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

                {user.authorized ? <Link to='/profile' style={{...linkstyle, marginLeft: "auto"}}>
                    <StyledUserButton>
                        <Avatar src={usrImage} sx={{marginRight: "1vw", width: 35, height: 35}}/>
                        {user.userData.username ? user.userData.username : 'Loading...'}
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
