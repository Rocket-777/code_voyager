import {Container, MapContainer, StyledCard} from "../placeDetailed/styles";
import {ImageContainer, NoImage, StyledHeader} from "../placeCard/styles";
import {Footer} from "../../main/footer";
import Logo from "../../../assets/newLogo.svg";
import {NavigateBack} from "../../main/navigation";
import React, {useState, useEffect} from "react";
import {Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";
import {
    TextInput, SendButton, ButtonIcon, AddImgButton, ImgIcon, UploadImgContainer, RemoveImgButton, RemImgIcon,
    ButtonLoader, RemoveImgBtnContainer
} from "./styles";
import {submitNewPlace, editPlace} from "./scripts";

import {useAppSelector, useAppDispatch} from "../../../reduxStore/reduxHooks";
import {detailedSlice} from "../../../reduxStore/reducers/placeInfoSlice";


import { Snackbar, Alert } from '@mui/material';


const EditPlace = ({type, editableData, toggleEdit, snack, renewData}) => {

    const dispatch = useAppDispatch();
    const {setEditData, startEdit, setPlaceRefresh, resetPlaceDetailed, finishEdit} = detailedSlice.actions;

    const placeData = useAppSelector(state => state.detailed.dataToEdit);
    const refresh = useAppSelector(state => state.detailed.refreshing);

    const fillRequired = placeData.place_name && placeData.place_description && placeData.place_description_full
        && placeData.place_address && placeData.contact_info;
    const [snackOpen, setSnackOpen] = useState(false);
    const [mapLoading, setMapLoading] = useState(true);
    const submitButtonLabel = type === 'edit' ? 'Сохранить изменения' : 'Отправить';
    const [newImage, setNewImage] = useState(null);

    useEffect(() => {
        if(type === 'edit')
        dispatch(startEdit());
        return () => {
            dispatch(finishEdit());
        }
    }, []);

    function handleFile(event) {
        if (event.target.files && event.target.files[0]) {

            setNewImage(event.target.files[0]);
            let reader = new FileReader();
            reader.onload = (ev) => {

                dispatch(setEditData({...placeData, image: ev.target.result}))
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    function handleFileRemove() {
        dispatch(setEditData({...placeData, image: ''}));
    }

    async function handleSubmit() {

        dispatch(setPlaceRefresh(true));
        const reqData = new FormData();
        reqData.append('placeName', placeData.place_name);
        reqData.append('placeDescription', placeData.place_description);
        reqData.append('placeFullDesc', placeData.place_description_full);
        reqData.append('address', placeData.place_address);
        reqData.append('contact', placeData.contact_info);
        reqData.append('geo', placeData.geo);
        reqData.append('image', newImage ?  newImage : placeData.image);

        if (type === 'blank') {
            await submitNewPlace(reqData);
            handleFileRemove();
            dispatch(resetPlaceDetailed());
            dispatch(setPlaceRefresh(false));
            setSnackOpen(true);
            document.getElementById('newPlaceContainer').scrollTo(0, 0);
        } else if (type === 'edit') {
            reqData.append('action', 'edit');
            await editPlace(editableData._id, reqData);
            await renewData();
            dispatch(setPlaceRefresh(false));
            snack();

            toggleEdit();
            document.getElementById('detailedPlace').scrollTo(0, 0);
        }
    }

    return (
        <Container id='newPlaceContainer'>
            <Snackbar open={snackOpen} autoHideDuration={7000} onClose={e => setSnackOpen(false)}>
                <Alert severity="success" sx={{width: '100%'}}>
                    Ваше предложение отправлено модератору!
                </Alert>
            </Snackbar>
            {type === 'blank' ? <NavigateBack/> : null}
            <StyledCard>
                <ImageContainer>
                    {placeData.image ?
                        <RemoveImgBtnContainer>
                            <RemoveImgButton onClick={e => handleFileRemove()}>
                                <RemImgIcon/>
                                Убрать изображение
                            </RemoveImgButton>
                            {type === "edit" ? <UploadImgContainer>
                                <input id='imgInp'
                                       style={{display: "none"}}
                                       type="file"
                                       accept="image/*"
                                       onChange={e => {
                                           handleFileRemove();
                                           handleFile(e)
                                       }}
                                />
                                <RemoveImgButton component='span'>
                                    <ImgIcon/>
                                    Заменить изображение
                                </RemoveImgButton>
                            </UploadImgContainer> : null}
                        </RemoveImgBtnContainer>
                        : null}

                    {placeData.image ? <img src={placeData.image} alt='unlucky :('/> : <NoImage>
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
                    {placeData.place_name ? placeData.place_name : 'Новое место'}
                </StyledHeader>
                <TextInput label='Название' autoComplete="off" size='small' required={true}
                           onChange={e => dispatch(setEditData({...placeData, place_name: e.target.value}))}
                           value={placeData.place_name}/>
                <TextInput label='Рецензия' autoComplete="off" size='small' required={true} multiline={true} minRows={3}
                           onChange={e => dispatch(setEditData({...placeData, place_description: e.target.value}))}
                           value={placeData.place_description}/>
                <TextInput label='Полное описание' autoComplete="off" size='small' required={true} multiline={true}
                           minRows={3}
                           onChange={e => dispatch(setEditData({...placeData, place_description_full: e.target.value}))}
                           value={placeData.place_description_full}/>
                <TextInput label='Адрес' autoComplete="off" size='small' required={true} multiline={true}
                           onChange={e => dispatch(setEditData({...placeData, place_address: e.target.value}))}
                           value={placeData.place_address}/>
                <TextInput label='Контакты' autoComplete="off" size='small' required={true} multiline={true}
                           onChange={e => dispatch(setEditData({...placeData, contact_info: e.target.value}))}
                           value={placeData.contact_info}/>
                <MapContainer>
                    <YMaps>
                        <Map defaultState={{center: placeData.geo.split(','), zoom: 14, controls: []}} width='100%'
                             height='45rem'
                             options={{suppressMapOpenBlock: true}} onLoad={e => setMapLoading(false)}>
                            <Placemark id='placemark' geometry={placeData.geo.split(',')} options={{draggable: true}}
                                       onDragEnd={e => {
                                           dispatch(setEditData({
                                               ...placeData,
                                               geo: e.get('target').geometry.getCoordinates().toString()
                                           }));
                                       }}/>
                            <ZoomControl/>
                        </Map>
                    </YMaps>
                    {mapLoading ? <div style={{
                        width: "100%", height: "45rem", backgroundColor: "lightgray",
                        color: "white"
                    }}>Loading map...</div> : null} {/*TODO SKELETON LOADING*/}
                    <SendButton disabled={!fillRequired || refresh} onClick={e => handleSubmit()}>
                        {refresh ? null : <ButtonIcon/>}
                        {refresh ? <ButtonLoader size={25}/>
                            : submitButtonLabel}
                    </SendButton>
                </MapContainer>

            </StyledCard>
            <div style={{minHeight: "6rem", width: "100%"}}/>
            <Footer/>
        </Container>
    );

}

export {EditPlace}
