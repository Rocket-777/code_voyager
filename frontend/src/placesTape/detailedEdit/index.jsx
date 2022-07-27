import {Container, MapContainer, StyledCard} from "../placeDetailed/styles";
import {ImageContainer, NoImage, StyledHeader} from "../placeCard/styles";
import {Footer} from "../../main/footer";
import {ReactComponent as Logo} from "../../assets/newLogo.svg";
import {NavigateBack} from "../../main/navigation";
import React, {useState} from "react";
import {Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";
import {TextInput, SendButton, ButtonIcon, AddImgButton, ImgIcon, UploadImgContainer, RemoveImgButton, RemImgIcon,
ButtonLoader} from "./styles";
import {postRequestWithFile} from "../../httpUtils/httpRequests";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const EditPlace = ({type}) => {
    const [placeData, setPlaceData] = useState({markerPos: [54.514, 36.26], placeName: '', placeDesc: '',
    placeFullDesc: '', address: '', contact: ''})
    const [thumbnail, setThumbnail] = useState(null);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const fillRequired = placeData.placeName && placeData.placeDesc && placeData.placeFullDesc && placeData.address && placeData.contact
    const [snackOpen, setSnackOpen] = useState(false);
    const [mapLoading, setMapLoading] = useState(true);
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

    async function handleSubmit() {
        setLoading(true);
        const reqData = new FormData();
        reqData.append('placeName', placeData.placeName);
        reqData.append('placeDescription', placeData.placeDesc);
        reqData.append('placeFullDesc', placeData.placeFullDesc);
        reqData.append('address', placeData.address);
        reqData.append('contact', placeData.contact);
        reqData.append('geo', placeData.markerPos);
        reqData.append('image', image)
        await postRequestWithFile('http://localhost:3003/places/new', reqData).catch(e => console.log(e));
        handleFileRemove();
        setPlaceData({markerPos: [54.514, 36.26], placeName: '', placeDesc: '',
            placeFullDesc: '', address: '', contact: ''});
        setLoading(false);
        setSnackOpen(true);
        document.getElementById('newPlaceContainer').scrollTo(0,0);
    }

    if(type === 'blank')
    return(
        <Container id='newPlaceContainer'>
            <Snackbar open={snackOpen} autoHideDuration={7000} onClose={e => setSnackOpen(false)}>
                <Alert  severity="success" sx={{ width: '100%' }}>
                    Ваше предложение отправлено модератору!
                </Alert>
            </Snackbar>
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
                    {placeData.placeName ? placeData.placeName : 'Новое место'}
                </StyledHeader>
                <TextInput label='Название'  autoComplete="off" size='small' required={true}
                           onChange={e => setPlaceData({...placeData, placeName: e.target.value})}  value={placeData.placeName} />
                <TextInput label='Рецензия' autoComplete="off" size='small' required={true} multiline={true} minRows={3}
                           onChange={e => setPlaceData({...placeData, placeDesc: e.target.value})}  value={placeData.placeDesc} />
                <TextInput label='Полное описание' autoComplete="off" size='small' required={true} multiline={true} minRows={3}
                           onChange={e => setPlaceData({...placeData, placeFullDesc: e.target.value})} value={placeData.placeFullDesc}/>
                <TextInput label='Адрес' autoComplete="off" size='small' required={true} multiline={true}
                           onChange={e => setPlaceData({...placeData, address: e.target.value})} value={placeData.address} />
                <TextInput label='Контакты' autoComplete="off" size='small' required={true} multiline={true}
                           onChange={e => setPlaceData({...placeData, contact: e.target.value})} value={placeData.contact} />
                <MapContainer>
                    <YMaps>
                        <Map defaultState={{center: placeData.markerPos, zoom: 14, controls: [] }} width='100%' height='45rem'
                             options={{suppressMapOpenBlock: true}} onLoad={e => setMapLoading(false)} >
                            <Placemark id='placemark' geometry={placeData.markerPos} options={{draggable: true}}
                                       onDragEnd={e => {
                                           console.log(e.get('target').geometry.getCoordinates());
                                           setPlaceData({...placeData, markerPos: e.get('target').geometry.getCoordinates()});
                                       }}/>
                            <ZoomControl/>
                        </Map>
                    </YMaps>
                    {mapLoading ? <div style={{width: "100%", height: "45rem", backgroundColor: "lightgray",
                    color:"white"}}>Loading map...</div> : null } {/*TODO SKELETON LOADING*/}
                    <SendButton disabled={!fillRequired || loading} onClick={e => handleSubmit()} >
                        { loading ? null : <ButtonIcon/>}
                        { loading ? <ButtonLoader size={25}/>
                        : 'Отправить'}
                    </SendButton>
                </MapContainer>

            </StyledCard>
            <div style={{minHeight: "10rem", width: "100%"}}/>
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
