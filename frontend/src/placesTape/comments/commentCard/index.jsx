import {Comment, CommentText, UserInfo, UserName} from "./styles";
import {Avatar} from "@mui/material";
import { Divider } from '@mui/material';

const CommentCard = (props) => {
    const usrImg = props.usrImg ? props.usrImg : null;

    return(
        <Comment>

            <UserInfo>
                <Avatar src={usrImg} sx={{width: 65, height: 65}}/>
                <UserName>{props.user}</UserName>
            </UserInfo>
            <CommentText>
                {props.comment}
            </CommentText>
            <Divider/>

        </Comment>
    );

}
export {CommentCard}
