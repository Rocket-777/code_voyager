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
import {getPlaceById, removePlace, approvePlace, disApprovePlace} from "./scripts";
import React, {useEffect, useState} from "react";
import {NavigateBack, NavigateTop} from "../../main/navigation";
import {Comments} from "../comments";
import {SendComment} from "../comments/sendComment";
import {getComments} from "../comments/scripts";
import {ActionButtons} from "../../actionButtons";
import {favoriteAction, likeAction} from "../placeCard/scripst/placeCardScripts";
import {EditPlace} from "../detailedEdit";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import {Map, Placemark, YMaps} from "react-yandex-maps";
import Logo from "../../../assets/newLogo.svg";


const AdminBar = ({editable, setEditable, id, showDel, placeStatus, setStatus}) => {
    const [count, setCount] = useState(-1)

    function handleApprove(){
        approvePlace(id).catch(e => console.log(e));
        setStatus();
    }

    function handleDisApprove(){
        disApprovePlace(id).catch(e => console.log(e));
        setStatus();
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
            <ToggleEdit onChange={e => setEditable(!editable)} checked={editable}/>
            {placeStatus ? <AdminModeration onClick={e => handleDisApprove()} >
                    Отправить на модерацию
                </AdminModeration> :
                <AdminModeration onClick={e => handleApprove()} >
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


const PlaceDetailed = (props) => {

    const [placeData, setPlaceData] = useState('');
    const [commentsData, setCommentsData] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [editable, setEditable] = useState(false);
    const [snackOpen, setSnackOpen] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const params = useParams();
    let ac = new AbortController();

    async function handleLike() {
        await likeAction(placeData._id);
        await getPlaceById(params.id, setPlaceData, ac);
    }

    async function handleFavorite() {
        await favoriteAction(placeData._id);
        await getPlaceById(params.id, setPlaceData, ac);
    }

    useEffect(() => {

        getPlaceById(params.id, setPlaceData, ac).then(res => {
            if (!ac.signal.aborted) setIsLoading(false);

        });
        getComments(setCommentsData, params.id, ac);


        return () => ac.abort();
    }, [])


    if (!placeData.error && !isLoading && !deleted) {
        return (
            <Container id='detailedPlace'>

                <AdminBar editable={editable} setEditable={setEditable} id={placeData._id}
                          showDel={() => {
                              setDeleted(true)
                          }} placeStatus={placeData.approved} setStatus={() => setPlaceData({...placeData, approved: !placeData.approved})  }/>

                <NavigateTop elemId='detailedPlace'/>
                <Snackbar open={snackOpen} autoHideDuration={7000} onClose={e => setSnackOpen(false)}>
                    <Alert severity="success" sx={{width: '100%'}}>
                        Изменения сохранены!
                    </Alert>
                </Snackbar>
                <NavigateBack/>
                {
                    !editable ?
                        <div style={{width: "100%"}}>
                            <StyledCard>
                                <ImageContainer>
                                    {placeData.image ? <img src={placeData.image} alt='image'/> :
                                        <NoImage>
                                            <Logo height='50%'/>
                                        </NoImage>}
                                    <ActionWrap>
                                        <ActionButtonContainer>
                                            <ActionButtons favoriteVisible={true} isFavorite={placeData.isFavorite}
                                                           isLiked={placeData.isLiked} removeVisible={false}
                                                           likeCount={placeData.likes} likeAction={() => handleLike()}
                                                           favoriteAction={() => handleFavorite()}/>
                                        </ActionButtonContainer>
                                    </ActionWrap>
                                </ImageContainer>
                                <StyledHeader variant='h4'>{placeData.place_name}</StyledHeader>
                                <ShortDescription>{placeData.place_description}</ShortDescription>
                                <FullDescription>{placeData.place_description_full}</FullDescription>
                                <MapContainer>
                                    <YMaps>
                                        <Map defaultState={{center: placeData.geo, zoom: 14}} width='100%' height='60vh'
                                             options={{suppressMapOpenBlock: true}}>
                                            <Placemark id='placemark' geometry={placeData.geo}
                                                       options={{draggable: false}}/>
                                        </Map>
                                    </YMaps>
                                </MapContainer>
                                <Info>{placeData.place_address}</Info>
                                <Info>{placeData.contact_info}</Info>

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
                                <EditPlace type="edit" editableData={placeData}
                                           toggleEdit={() => setEditable(!editable)}
                                           snack={() => setSnackOpen(true)} renewData={() => {
                                    getPlaceById(params.id, setPlaceData, ac).then(res => {
                                        if (!ac.signal.aborted) setIsLoading(false)
                                    });
                                    getComments(setCommentsData, params.id, ac);
                                    return () => ac.abort();
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
    } else if (isLoading) {
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
    }

}

export {PlaceDetailed}
