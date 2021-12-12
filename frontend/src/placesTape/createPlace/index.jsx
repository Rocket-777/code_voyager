import {StyledCard, StyledRow, StyledSemiRow, StyledTextInp, StyledHeader, StyledButton,
StyledTextInpDescription, StyledColumn, UploadButton, UploadButtonContainer,
ImageContainer, RemoveImageButton} from "./styles";
import {useState} from "react";

const PlaceCreator = () => {
    const [files, setFiles] = useState(null);

    function handleFile(event){
        if(event.target.files && event.target.files[0]){
            let reader = new FileReader();
            reader.onload = (ev) => {
                setFiles(ev.target.result);
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    return(
        <StyledCard>
            <StyledHeader variant='h4'>Новое место</StyledHeader>
            <StyledRow>
                <StyledSemiRow variant='h5'>
                    Название:
                </StyledSemiRow>
                <StyledTextInp size='small' placeholder='Название'/>
            </StyledRow>
            <StyledColumn>
                <StyledSemiRow variant='h5'>
                    Описание:
                </StyledSemiRow>
                <StyledTextInpDescription size='small' multiline='true' minRows='10' placeholder='Описание'/>
            </StyledColumn>

            {files ?
                <StyledColumn>
                    <StyledSemiRow variant='h5'>
                        Изображение:
                    </StyledSemiRow>
                    <ImageContainer>
                        <img src={files} alt='unlucky :('/>
                    </ImageContainer>
                    <RemoveImageButton color='secondary' variant='contained'
                    onClick={e => setFiles(null)}>Убрать изображение</RemoveImageButton>
                </StyledColumn>

                : <UploadButtonContainer>
                <input id ='imgInp'
                    style={{ display: "none" }}
                    type="file"
                    accept="image/*"
                    onChange={e => handleFile(e)}
                />
                <UploadButton color="secondary" variant="contained" component="span">
                    Загрузить изображение
                </UploadButton>
            </UploadButtonContainer>}
            <StyledButton>Добавить</StyledButton>
        </StyledCard>

    );
}

export {PlaceCreator}