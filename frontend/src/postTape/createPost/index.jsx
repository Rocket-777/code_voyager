import {StyledTextInp, StyledCard, StyledButton} from "./styles";
import {useState} from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";


const CreatePost = (props) => {
    const [textVal, setText] = useState('');

//TODO REDO ASYNC REQUESTS WITH .then syntax like doSomTh().then(res => setSomeState(res))

    //sendPost(textVal, setText, props.setPosts)
    return (
        <StyledCard>

            <StyledTextInp  size='small' type='text'  multiline={true} variant='filled'
                           placeholder='Что-нибудь интересное...' minRows={3} onChange={e => setText(e.target.value)} value={textVal}/>
            <StyledButton disabled={!textVal} variant='contained'  onClick={ e => {props.handleSubmit(textVal); setText('')}}>
                <SendOutlinedIcon sx={{marginRight: '0.4vw'}}/>
                Отправить
            </StyledButton>

        </StyledCard>

    );

}

export {CreatePost}
