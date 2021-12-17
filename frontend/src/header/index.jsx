import {StyledHeader, StyledButton, StyledUserButton} from "./styles";
import {Link} from "react-router-dom";
import {linkstyle} from "./styles";
import {useEffect, useState} from "react";
import {usrInit} from "../userProfile/scripts/usrInit";
import {Avatar} from "@mui/material";

const Header = (props) => {
    const usrImage = props.usrData.image ? props.usrData.image : 'noimage.png';

    return (


        <StyledHeader elevation={3} square={true}>
            <StyledButton>
                <Link to='/' style={linkstyle}>
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
                    : <Link to='/log-in' style={linkstyle}>Войти/Регистрация</Link>}
            </StyledUserButton>

        </StyledHeader>
    );

}

export {Header}