import {StyledCard, StyledTextInp, SendFab, InputContainer} from "./styles";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {useState} from "react";
import {sendComment} from "../scripts";




const SendComment = (props) => {
    const [commentVal, setCommentVal] = useState('');
    return(
        <StyledCard>
            <InputContainer>
                <StyledTextInp placeholder='Придумай комментарий...' size='small'  multiline={true} type='text' minRows={2}
                onChange={e => setCommentVal(e.target.value)} value={commentVal}/>
                <SendFab onClick={e => { sendComment(commentVal, props.id, setCommentVal, props.updateComments)}}>
                    <SendRoundedIcon sx={{fontSize: 25, color: 'white' }}/>
                </SendFab>
            </InputContainer>




        </StyledCard>
    );

}

export {SendComment}
