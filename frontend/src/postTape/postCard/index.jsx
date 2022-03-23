import {ButtonBlock, StyledCard, StyledText, UserInfo, UserName} from "./styles";
import {Avatar, Button} from "@mui/material";
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {deletePost} from "./scripts/postCardScripts";
import {ActionButtons} from "../../actionButtons";

const PostCard = (props) => {
    const usrImg = props.userImg ? props.userImg : 'noimage.png';
    return (

        <StyledCard>

            <UserInfo>
                <Avatar src={usrImg} sx={{width: 65, height: 65}}/>
                <UserName>{props.username}</UserName>
            </UserInfo>

            <StyledText>
                {props.text}
            </StyledText>
            <ButtonBlock>
                <ActionButtons removeVisible={props.isPriveleged} removeAction={() => deletePost(props.id, props.setPosts)}
                likeCount={123} commentCount={22} isLiked={true} />
            </ButtonBlock>


        </StyledCard>
    );
}

export {PostCard}
