import {ButtonBlock, StyledCard, StyledText, UserInfo, UserName} from "./styles";
import {Avatar} from "@mui/material";
import {Comments} from "../../placesTape/comments";
import {SendComment} from "../../placesTape/comments/sendComment";
import {deletePost} from "./scripts/postCardScripts";
import {ActionButtons} from "../../actionButtons";
import {useEffect, useState} from "react";
import {getComments} from "../../placesTape/comments/scripts";
import {setPostById, postLikeAction} from "./scripts/postCardScripts";

const PostCard = (props) => {

    const [showComments, setShowComments] = useState(false);
    const [commentsData, setCommentsData] = useState('');
    const [postData, setPostData] = useState(props.postData);

    useEffect(()=>{
        if(showComments){
            getComments(setCommentsData, props.id);
        }
    }, [showComments])

    async function handleLike(){
        await postLikeAction(postData._id)
        await setPostById(postData._id,setPostData);
    }

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
                likeCount={postData.likes} commentCount={postData.comments} isLiked={postData.isLiked} likeAction={() => handleLike()}
                               commentAction={() => setShowComments(!showComments)} />
            </ButtonBlock>
            {showComments ?  <div>
                <Comments data={commentsData} />
                <SendComment commentOf='posts' id={props.id} updateComments={setCommentsData} updateData={() => setPostById(postData._id,setPostData)}/>
            </div> : null }


        </StyledCard>
    );
}

export {PostCard}
