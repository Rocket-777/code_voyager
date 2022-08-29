import {
    Col,
    Comments,
    Divider,
    ImageIcon,
    LogoutButton,
    OutIcon,
    ProfileCard,
    Row,
    Text,
    Text2,
    UploadButton,
    UploadButtonContainer,
    UserImage
} from "./styles";
import {FavoriteActive, LikeActive} from "../../actionButtons/styles";
import React from "react"

const UserProfile = React.memo(({userName, status, avatar, handleImage, logoutAction}) => {
    return (
        <ProfileCard>
            <Row>
                <UserImage src={avatar}/>
                <Col>
                    <Text2>{userName}</Text2>
                    <Text>{status}</Text>
                    <UploadButtonContainer>
                        <input id='imgInp'
                               style={{display: "none"}}
                               type="file"
                               accept="image/*"
                               onChange={e => handleImage(e)}
                        />
                        <UploadButton component='span'>
                            <ImageIcon/>
                        </UploadButton>
                    </UploadButtonContainer>

                </Col>
            </Row>
            <Divider/>
            <Col>
                <Text>
                    <Comments/>
                    100500
                </Text>
                <Text>
                    <LikeActive/>
                    100500
                </Text>
                <Text>
                    <FavoriteActive/>
                    100500
                </Text>
            </Col>
            <Divider/>
            <Col>
                <Text>
                    Зарегистрирован: 20.01.20
                </Text>
                <LogoutButton onClick={(e) => logoutAction()}
                >
                    <OutIcon/>
                    Выйти
                </LogoutButton>
            </Col>

        </ProfileCard>
    )
})

export {UserProfile}
