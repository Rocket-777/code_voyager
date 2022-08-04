import {StyledTextInp, StyledCard, StyledButton} from "./styles";
import {useState} from "react";
import SendRoundedIcon from '@mui/icons-material/SendRounded';


const CreatePost = (props) => {
    const [textVal, setText] = useState('');


    return (
        <StyledCard>

            <StyledTextInp disabled={props.loading} size='small' type='text' multiline={true} variant='filled'
                           placeholder='Что-нибудь интересное...' minRows={3} onChange={e => setText(e.target.value)}
                           value={textVal}/>
            <StyledButton disabled={!textVal} variant='contained' onClick={e => {
                props.handleSubmit(textVal);
                setText('')
            }}>
                <SendRoundedIcon sx={{marginRight: '0.4vw'}}/>
                Отправить
            </StyledButton>

        </StyledCard>

    );

}

export {CreatePost}
