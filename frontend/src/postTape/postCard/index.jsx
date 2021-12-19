import {StyledCard, StyledText, UserInfo, UserName, ButtonBlock, PostBody} from "./styles";
import {Avatar, Button} from "@mui/material";
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import {deletePost} from "./scripts/postCardScripts";

const PostCard = (props) => {
    const usrImg = props.userImg ? props.userImg : 'noimage.png';
    return(

        <StyledCard>

                <UserInfo>
                    <Avatar src={usrImg} sx={{width: 65, height: 65}}/>
                    <UserName>{props.username}</UserName>
                </UserInfo>

                <StyledText >
                    {props.text}
                </StyledText>

            <ButtonBlock>
                <Button variant='contained' color='secondary'>
                    <FavoriteBorderIcon sx={{marginRight: '0.4vw'}}/>
                    Нравится</Button>
                <Button variant='contained'>
                    <CommentOutlinedIcon sx={{marginRight: '0.4vw'}}/>
                    Комментарии</Button>
                {props.isPriveleged ? <Button variant='contained' sx={{backgroundColor: 'red', ':hover': {backgroundColor: 'crimson'}}}
                onClick={e => deletePost(props.id, props.setPosts)}>
                    <DeleteOutlineOutlinedIcon sx={{marginRight: '0.4vw'}}/>
                    Удалить</Button> : null}
            </ButtonBlock>

        </StyledCard>
    );
}

export {PostCard}