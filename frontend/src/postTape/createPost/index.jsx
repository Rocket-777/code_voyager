import {StyledTextInp, StyledCard, StyledButton} from "./styles";
import {useState} from "react";
import {sendPost} from "./scripts/sendPost";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const CreatePost = (props) => {
    const [textVal, setText] = useState('');

    return (
        <StyledCard>

            <StyledTextInp size='small' type='text' multiline={true} variant='filled'
                           placeholder='Что-нибудь интересное...' minRows={3} onChange={e => setText(e.target.value)} value={textVal}/>
            <StyledButton variant='contained' disabled={!textVal} onClick={e => sendPost(textVal, setText, props.setPosts)}>
                <SendOutlinedIcon sx={{marginRight: '0.4vw'}}/>
                Отправить
            </StyledButton>

        </StyledCard>

    );

}

export {CreatePost}