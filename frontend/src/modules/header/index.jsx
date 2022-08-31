import {StyledHeader, StyledButton, StyledUserButton} from "./styles";
import {Link} from "react-router-dom";
import {linkstyle} from "./styles";
import {Avatar} from "@mui/material";
import Logo from "../../assets/newLogo.svg"
import {useAppSelector} from "../../reduxStore/reduxHooks";
import {useState} from "react";

const Header = () => {
    const user = useAppSelector((state) => state.user);
    const usrImage = user.userData.image ? user.userData.image : null;
    const [width, setWidth] = useState(window.innerWidth);
    const uiTransform = width < 768;

    window.onresize = (e) => {
       setWidth(window.innerWidth);
    }


    return (

        <StyledHeader  >
            {uiTransform ? null : <Logo height={35} style={{marginLeft: '1rem', marginRight: '1rem'}} />}

            <Link to='/placesList' style={linkstyle}>
                <StyledButton >
                    Главная
                </StyledButton>
            </Link>
            <Link to='/placesList' style={linkstyle}>
                <StyledButton >
                    Места
                </StyledButton>
            </Link>
            <Link to='/feed' style={linkstyle}>
            <StyledButton >
                    Лента
            </StyledButton>
            </Link>
            <Link to='/feed' style={linkstyle}>
                <StyledButton >
                    События
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
                        Войти
                        </StyledUserButton>
                    </Link>}


        </StyledHeader>
    );

}

export {Header}
