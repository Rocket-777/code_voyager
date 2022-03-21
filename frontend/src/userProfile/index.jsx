import {
    StyledButton,
    StyledCard,
    StyledHeader,
    StyledImageOps,
    StyledRow,
    StyledSemiRow,
    StyledTypography,
    UploadButton,
    UploadButtonContainer
} from "./styles";
import {logOutAction} from "../logIn/scripts/logOutRequest";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Avatar} from "@mui/material";
import {removeUserImage, sendUserImage} from "./scripts/profileScripts";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const UsrProfile = (props) => {

    const navigate = useNavigate();

    const [thumbnail, setThumbnail] = useState("noImage.png")

    function handleFile(event) {

        if (event.target.files && event.target.files[0]) {

            let reader = new FileReader();
            reader.onload = (ev) => {
                setThumbnail(ev.target.result);
            }
            reader.readAsDataURL(event.target.files[0]);

            const reqData = new FormData();
            reqData.append('image', event.target.files[0]);
            sendUserImage(reqData, props.auth).catch(e => console.log(e));
        }
    }

    function handleRemoveImg() {
        removeUserImage(props.auth);
    }

    return (
        <div>
            <StyledCard>
                <StyledHeader variant="h4">
                    Профиль пользователя
                </StyledHeader>
                <StyledRow>
                    <StyledSemiRow variant="h5">
                        Имя пользователя
                    </StyledSemiRow>
                    <StyledTypography>
                        {props.usrData.username}
                    </StyledTypography>
                </StyledRow>
                <StyledRow>
                    <StyledSemiRow variant="h5">
                        Статус
                    </StyledSemiRow>
                    <StyledTypography>
                        {props.usrData.status}
                    </StyledTypography>
                </StyledRow>
                <StyledImageOps>
                    {props.usrData.image ? <Avatar src={props.usrData.image} alt=':C' sx={{width: 300, height: 300}}/>
                        : <Avatar src='noImage.png' alt=':C' sx={{width: 300, height: 300}}/>}
                    {props.usrData.image ?
                        <UploadButtonContainer>
                            <UploadButton color="secondary" variant="contained" onClick={e => handleRemoveImg()}
                                          sx={{backgroundColor: "red", ":hover": {backgroundColor: "crimson"}}}>
                                <DeleteOutlineOutlinedIcon sx={{marginRight: '1vw'}}/>
                                Удалить изображение
                            </UploadButton>
                        </UploadButtonContainer> :
                        <UploadButtonContainer>
                            <input id='imgInp'
                                   style={{display: "none"}}
                                   type="file"
                                   accept="image/*"
                                   onChange={e => handleFile(e)}
                            />
                            <UploadButton color="secondary" variant="contained" component="span">
                                <FileUploadOutlinedIcon sx={{marginRight: '1vw'}}/>
                                Загрузить изображение
                            </UploadButton>
                        </UploadButtonContainer>}

                </StyledImageOps>

                <StyledButton onClick={e => logOutAction(props.auth, navigate, props.setUsrData)}>
                    <LogoutOutlinedIcon sx={{marginRight: '0.4vw'}}/>
                    Выйти
                </StyledButton>

            </StyledCard>
        </div>
        );

}


export {UsrProfile};
