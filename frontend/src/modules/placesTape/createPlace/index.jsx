// // import {
// //     ImageContainer,
// //     RemoveImageButton,
// //     StyledButton,
// //     StyledCard,
// //     StyledColumn,
// //     StyledHeader,
// //     StyledRow,
// //     StyledSemiRow,
// //     StyledTextInp,
// //     StyledTextInpDescription,
// //     UploadButton,
// //     UploadButtonContainer
// // } from "./styles";
// import {useState} from "react";
// import {postRequestWithFile} from "../../httpUtils/httpRequests.ts";
// import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
// import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import SendRoundedIcon from '@mui/icons-material/SendRounded';
// import {getPlaces} from "../scripts/placesUtils";
//
// const PlaceCreator = (props) => {
//     const [thumbnail, setThumbnail] = useState(null);
//     const [image, setImage] = useState(null);
//     const [placeName, setPlaceName] = useState('');
//     const [placeDesc, setPlaceDesc] = useState('');
//
//     function handleFile(event) {
//         if (event.target.files && event.target.files[0]) {
//             setImage(event.target.files[0]);
//             let reader = new FileReader();
//             reader.onload = (ev) => {
//                 setThumbnail(ev.target.result);
//             }
//             reader.readAsDataURL(event.target.files[0]);
//         }
//     }
//
//     function handleFileRemove() {
//         setThumbnail(null)
//         setImage(null);
//     }
//
//     async function handleSubmit() {
//
//         const reqData = new FormData();
//         reqData.append('placeName', placeName);
//         reqData.append('placeDescription', placeDesc);
//         reqData.append('image', image)
//
//
//         await postRequestWithFile('http://localhost:3003/places/new', reqData).catch(e => console.log(e));
//         handleFileRemove();
//
//         if (props.isPrivileged) {
//             //props.setPlaces(null);
//             await getPlaces(props.setPlaces, props.placeStatus, props.ac);
//         }
//         setPlaceName('');
//         setPlaceDesc('');
//     }
//
//     return (
//         <StyledCard>
//             <StyledHeader variant='h4'>Новое место</StyledHeader>
//             <StyledRow>
//                 <StyledSemiRow variant='h5'>
//                     Название:
//                 </StyledSemiRow>
//                 <StyledTextInp size='small' placeholder='Название' onChange={e => setPlaceName(e.target.value)}
//                                value={placeName}/>
//             </StyledRow>
//             <StyledColumn>
//                 <StyledSemiRow variant='h5'>
//                     Описание:
//                 </StyledSemiRow>
//                 <StyledTextInpDescription size='small' multiline={true} minRows='3' placeholder='Описание'
//                                           onChange={e => setPlaceDesc(e.target.value)} value={placeDesc}/>
//             </StyledColumn>
//
//             {thumbnail ?
//                 <StyledColumn>
//                     <StyledSemiRow variant='h5'>
//                         Изображение:
//                     </StyledSemiRow>
//                     <ImageContainer>
//                         <img src={thumbnail} alt='unlucky :('/>
//                     </ImageContainer>
//                     <RemoveImageButton color='secondary' variant='contained'
//                                        onClick={e => handleFileRemove()}>
//                         <DeleteOutlineOutlinedIcon sx={{marginRight: '1vw'}}/>
//                         Убрать изображение</RemoveImageButton>
//                 </StyledColumn>
//
//                 : <UploadButtonContainer>
//                     <input id='imgInp'
//                            style={{display: "none"}}
//                            type="file"
//                            accept="image/*"
//                            onChange={e => handleFile(e)}
//                     />
//                     <UploadButton color="secondary" variant="contained" component="span">
//                         <FileUploadOutlinedIcon sx={{marginRight: '1vw'}}/>
//                         Загрузить изображение
//                     </UploadButton>
//                 </UploadButtonContainer>}
//             <StyledButton onClick={e => handleSubmit()}>
//                 <SendRoundedIcon sx={{marginRight: '0.4vw'}}/>
//                 {props.isPrivileged ? "Добавить" : "Предложить"}</StyledButton>
//         </StyledCard>
//
//     );
// }
//
// export {PlaceCreator}
