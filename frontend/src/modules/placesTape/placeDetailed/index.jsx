import {useParams} from "react-router-dom";
import {
    ActionButtonContainer,
    Container,
    FullDescription,
    Info,
    MapContainer,
    ShortDescription,
    StyledCard,
    StyledHeader,
    ActionWrap,
    ToggleEdit,
    AdminContainer,
    AdminText,
    AdminRemove, AdminModeration
} from "./styles";
import {ImageContainer, NoImage} from "../placeCard/styles";
import {MarginContainer} from "../comments/sendComment/styles";
import {Footer} from "../../main/footer";
import {removePlace, approvePlace, disApprovePlace} from "./scripts";
import React, {useEffect, useState} from "react";
import {NavigateBack, NavigateTop} from "../../main/navigation";
import {Comments} from "../comments";
import {SendComment} from "../comments/sendComment";
import {getComments} from "../comments/scripts";
import {ActionButtons} from "../../actionButtons";
import {favoriteAction, likeAction} from "../placeCard/scripst/placeCardScripts";
import {EditPlace} from "../detailedEdit";
import {Map, Placemark, YMaps} from "react-yandex-maps";
import Logo from "../../../assets/newLogo.svg";

import {useAppDispatch, useAppSelector} from "../../../reduxStore/reduxHooks";
import {fetchPlace, renewPlaceDetailed} from "../../../reduxStore/reducers/Actions";
import {detailedSlice} from "../../../reduxStore/reducers/placeInfoSlice";


import { Alert, Snackbar } from '@mui/material';


const AdminBar = ({id, showDel, placeStatus}) => {
    const [count, setCount] = useState(-1)
    const editable = useAppSelector(state => state.detailed.editable);
    const dispatch = useAppDispatch();
    const {setEditable, setApproved} = detailedSlice.actions;

    function handleApprove() {
        approvePlace(id).catch(e => console.log(e));
        dispatch(setApproved(!placeStatus));
    }

    function handleDisApprove() {
        disApprovePlace(id).catch(e => console.log(e));
        dispatch(setApproved(!placeStatus));
    }

    function counterAction() {
        if (count === -1) {
            setCount(3);
        }
        if (count > 0) {
            setCount(count - 1)
            if (count === 1) {
                document.getElementById('removeButton').style.backgroundColor = 'crimson';
            }
        } else if (count === 0) {
            setCount(-1);
            document.getElementById('removeButton').style.backgroundColor = '#ff6054';
            removePlace(id).catch(e => console.log(e));
            showDel();
        }
    }

    return (
        <AdminContainer>
            <AdminText>
                Редактировать
            </AdminText>
            <ToggleEdit onChange={e => dispatch(setEditable(!editable))} checked={editable}/>
            {placeStatus ? <AdminModeration onClick={e => handleDisApprove()}>
                    Отправить на модерацию
                </AdminModeration> :
                <AdminModeration onClick={e => handleApprove()}>
                    Принять
                </AdminModeration>
            }

            <AdminRemove id='removeButton' onClick={e => counterAction()}>
                Удалить
                {count > 0 ? ' ' + count : null}
            </AdminRemove>
        </AdminContainer>
    );
}


const PlaceDetailed = () => {


    const [commentsData, setCommentsData] = useState('');
    const [snackOpen, setSnackOpen] = useState(false);
    const [deleted, setDeleted] = useState(false);

    const params = useParams();

    const dispatch = useAppDispatch();
    const placeData = useAppSelector(state => state.detailed);
    const {placeRefreshing, setEditable} = detailedSlice.actions;
    const ac = new AbortController();

    async function handleLike() {
        dispatch(placeRefreshing());
        await likeAction(placeData.data._id);
        await dispatch(renewPlaceDetailed(params.id, ac));
    }

    async function handleFavorite() {
        dispatch(placeRefreshing());
        await favoriteAction(placeData.data._id);
        await dispatch(renewPlaceDetailed(params.id, ac));
    }

    useEffect(() => {
        dispatch(fetchPlace(params.id, ac));
        getComments(setCommentsData, params.id, ac);
        return () => ac.abort();
    }, [])


    if (!placeData.error && !placeData.isLoading && !deleted) {
        return (
            <Container id='detailedPlace'>
                <AdminBar id={placeData.data._id}
                          showDel={() => {
                              setDeleted(true)
                          }} placeStatus={placeData.data.approved}/>

                <NavigateTop elemId='detailedPlace'/>
                <Snackbar open={snackOpen} autoHideDuration={7000} onClose={e => setSnackOpen(false)}>
                    <Alert severity="success" sx={{width: '100%'}}>
                        Изменения сохранены!
                    </Alert>
                </Snackbar>
                <NavigateBack/>
                {
                    !placeData.editable ?
                        <div style={{width: "100%"}}>
                            <StyledCard>
                                <ImageContainer>
                                    {placeData.data.image ? <img src={placeData.data.image} alt='image'/> :
                                        <NoImage>
                                            <Logo height='50%'/>
                                        </NoImage>}
                                    <ActionWrap>
                                        <ActionButtonContainer>
                                            <ActionButtons favoriteVisible={true} isFavorite={placeData.data.isFavorite}
                                                           isLiked={placeData.data.isLiked} removeVisible={false}
                                                           likeCount={placeData.data.likes}
                                                           likeAction={() => handleLike()}
                                                           favoriteAction={() => handleFavorite()}/>
                                        </ActionButtonContainer>
                                    </ActionWrap>
                                </ImageContainer>
                                <StyledHeader variant='h4'>{placeData.data.place_name}</StyledHeader>
                                <ShortDescription>{placeData.data.place_description}</ShortDescription>
                                <FullDescription>{placeData.data.place_description_full}</FullDescription>
                                <MapContainer>
                                    <YMaps>
                                        <Map defaultState={{center: placeData.data.geo.split(','), zoom: 14}}
                                             width='100%' height='60vh'
                                             options={{suppressMapOpenBlock: true}}>
                                            <Placemark id='placemark' geometry={placeData.data.geo.split(',')}
                                                       options={{draggable: false}}/>
                                        </Map>
                                    </YMaps>
                                </MapContainer>
                                <Info>{placeData.data.place_address}</Info>
                                <Info>{placeData.data.contact_info}</Info>

                                <Comments data={commentsData} sign={true}/>
                                <SendComment id={params.id} commentOf='places' updateComments={setCommentsData}
                                             updatePlaceData={null} ac={ac}/>
                            </StyledCard>
                            <MarginContainer/>
                            <Footer/>
                        </div>
                        :
                        <div style={{width: "100%"}}>
                            <Container>
                                <EditPlace type="edit" editableData={placeData.data}
                                           toggleEdit={() => dispatch(setEditable(!placeData.editable))}
                                           snack={() => setSnackOpen(true)} renewData={async () => {
                                    await dispatch(renewPlaceDetailed(params.id, ac));
                                    await getComments(setCommentsData, params.id, ac);
                                }
                                }/>
                            </Container>
                        </div>
                }
            </Container>
        );
    } else if (placeData.error) {
        return (
            <h1>{placeData.error}</h1>
        );
    } else if (placeData.isLoading) {
        return (
            <h1>Loading...</h1>
        );
    } else if (deleted) {
        return (
            <div>
                <NavigateBack/>
                <h1>deleted</h1>
            </div>

        )
    } else {
        return null;
    }

}

export {PlaceDetailed}
