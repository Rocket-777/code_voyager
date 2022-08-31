import {StyledTextInp, StyledCard, StyledButton} from "./styles";
import {useState} from "react";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {useAppSelector} from "../../../reduxStore/reduxHooks";


const CreatePost = ({handleSubmit}) => {
    const [textVal, setText] = useState('');
    const isLoading = useAppSelector(state => state.posts.isLoading);

    return (
        <StyledCard>

            <StyledTextInp disabled={isLoading} size='small' type='text' multiline={true} variant='filled'
                           placeholder='Что-нибудь интересное...' minRows={3} onChange={e => setText(e.target.value)}
                           value={textVal}/>
            <StyledButton disabled={!textVal} variant='contained' onClick={e => {
                handleSubmit(textVal);
                setText('')
            }}>
                <SendRoundedIcon sx={{marginRight: '0.4vw'}}/>
                Отправить
            </StyledButton>

        </StyledCard>

    );

}

export {CreatePost}
