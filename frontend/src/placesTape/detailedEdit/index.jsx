import {Container, MapContainer, StyledCard} from "../placeDetailed/styles";
import {ImageContainer, NoImage, StyledHeader} from "../placeCard/styles";
import {Footer} from "../../main/footer";
import {ReactComponent as Logo} from "../../assets/newLogo.svg";
import {NavigateBack} from "../../main/navigation";
import React, {useState} from "react";
import {Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";
import {TextInput, SendButton, ButtonIcon, AddImgButton, ImgIcon, UploadImgContainer, RemoveImgButton, RemImgIcon} from "./styles";

const EditPlace = ({type}) => {
    const [markerPos, setMarker] = useState([54.514, 36.26]);
    const [thumbnail, setThumbnail] = useState(null);
    const [image, setImage] = useState(null);

    function handleFile(event) {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
            let reader = new FileReader();
            reader.onload = (ev) => {
                setThumbnail(ev.target.result);
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    function handleFileRemove() {
        setThumbnail(null)
        setImage(null);
    }


    if(type === 'blank')
    return(
        <Container>
            <NavigateBack/>
            <StyledCard>
                <ImageContainer>
                    {thumbnail ? <RemoveImgButton onClick={e => handleFileRemove()} >
                        <RemImgIcon/>
                        Убрать изображение
                    </RemoveImgButton> : null}

                    { thumbnail ? <img src={thumbnail} alt='unlucky :('/> : <NoImage>
                        <Logo height='50%'/>
                        <UploadImgContainer>
                            <input id='imgInp'
                                   style={{display: "none"}}
                                   type="file"
                                   accept="image/*"
                                   onChange={e => handleFile(e)}
                            />
                            <AddImgButton component='span'>
                                <ImgIcon/>
                                Добавить изображение
                            </AddImgButton>
                        </UploadImgContainer>
                    </NoImage>}
                </ImageContainer>
                <StyledHeader variant='h4'>
                    Новое место
                </StyledHeader>
                <TextInput label='Название'  autoComplete="off" size='small' required={true} />
                <TextInput label='Рецензия' autoComplete="off" size='small' required={true}/>
                <TextInput label='Полное описание' autoComplete="off" size='small' required={true}/>
                <TextInput label='Адрес' autoComplete="off" size='small' required={true}/>
                <TextInput label='Контакты' autoComplete="off" size='small' required={true}/>
                <MapContainer>
                    <YMaps>
                        <Map defaultState={{center: markerPos, zoom: 14, controls: [] }} width='100%' height='45rem' options={{suppressMapOpenBlock: true}} >
                            <Placemark id='placemark' geometry={markerPos} options={{draggable: true}}
                                       onDragEnd={e => {
                                           console.log(e.get('target').geometry.getCoordinates());
                                           setMarker(e.get('target').geometry.getCoordinates());
                                       }}/>
                            <ZoomControl/>
                        </Map>
                    </YMaps>
                    <SendButton>
                        <ButtonIcon/>
                        Отправить
                    </SendButton>
                </MapContainer>

            </StyledCard>
            <Footer/>
        </Container>
    )
    else if(type === 'edit'){
        return(
            <div>
                edit
            </div>
        )
    }
}

export {EditPlace}
