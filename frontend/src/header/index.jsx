import {StyledHeader, StyledButton, StyledUserButton} from "./styles";
import {Link} from "react-router-dom";
import {linkstyle} from "./styles";
import {useEffect, useState} from "react";
import {usrInit} from "../userProfile/scripts/usrInit";
import {Avatar} from "@mui/material";
import {ReactComponent as Logo} from "../assets/newLogo.svg"

const Header = (props) => {
    const usrImage = props.usrData.image ? props.usrData.image : null;

    return (

        <StyledHeader  >
            {/*<img src="/logoHeader.png" alt='logo' width={39} style={{marginLeft: '1vw', marginRight: '1vw'}}/>*/}
            <Logo height={35} style={{marginLeft: '1rem', marginRight: '1rem'}} />


            <Link to='/places' style={linkstyle}>
                <StyledButton >
                    Главная
                </StyledButton>
            </Link>

            <Link to='/news' style={linkstyle}>
            <StyledButton >
                    Лента
            </StyledButton>
            </Link>

                {props.isAuth ? <Link to='/profile' style={{...linkstyle, marginLeft: "auto"}}>
                    <StyledUserButton>
                        <Avatar src={usrImage} sx={{marginRight: "1vw", width: 35, height: 35}}/>
                        {props.usrData.username}
                    </StyledUserButton>
                </Link>
                    : <Link to='/log-in' style={linkstyle}>
                        <StyledUserButton>
                        Войти/Зарегистрироваться
                        </StyledUserButton>
                    </Link>}


        </StyledHeader>
    );

}

export {Header}
