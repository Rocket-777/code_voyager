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


        <StyledHeader elevation={3} square={true}>
            {/*<img src="/logoHeader.png" alt='logo' width={39} style={{marginLeft: '1vw', marginRight: '1vw'}}/>*/}
            <Logo height={35} style={{marginLeft: '1rem', marginRight: '1rem'}} />
            <StyledButton>
                <Link to='/places' style={linkstyle}>
                    Главная
                </Link>
            </StyledButton>
            <StyledButton>
                <Link to='/news' style={linkstyle}>
                    Новости
                </Link>
            </StyledButton>
            <StyledUserButton>
                {props.isAuth ? <Link to='/profile' style={linkstyle}> <Avatar src={usrImage} sx={{marginRight: "1vw", width: 35, height: 35}}/> {props.usrData.username}</Link>
                    : <Link to='/log-in' style={linkstyle}>Войти/Зарегистрироваться</Link>}
            </StyledUserButton>

        </StyledHeader>
    );

}

export {Header}
