import {StyledCard, StyledTextInp, SendFab, InputContainer} from "./styles";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {useState} from "react";
import {sendComment, updatePlaceData} from "../scripts";

//TODO REDO ASYNC REQUESTS WITH .then syntax like doSomTh().then(res => setSomeState(res))

const SendComment = (props) => {

    const [commentVal, setCommentVal] = useState('');
    return(
        <StyledCard>
            <InputContainer>
                <StyledTextInp placeholder='Придумай комментарий...' size='small'  multiline={true} type='text' minRows={2}
                onChange={e => setCommentVal(e.target.value)} value={commentVal}/>
                <SendFab disabled={!commentVal} onClick={ async e => {await sendComment(commentVal, props.id, setCommentVal, props.updateComments);
                      if(props.updatePlaceData){
                          await updatePlaceData(props.id, props.updatePlaceData)
                      }}}>
                    <SendRoundedIcon sx={{fontSize: 25, color: 'white' }}/>
                </SendFab>
            </InputContainer>

        </StyledCard>
    );

}

export {SendComment}
