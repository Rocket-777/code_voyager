import {
    ButtonBlock,
    SkeletonAvatar,
    SkeletonContent,
    SkeletonUser,
    StyledCard,
    StyledText,
    UserInfo,
    UserName
} from "./styles";
import {Avatar} from "@mui/material";
import {Comments} from "../../placesTape/comments";
import {SendComment} from "../../placesTape/comments/sendComment";
import {deletePost} from "./scripts/postCardScripts";
import {ActionButtons} from "../../actionButtons";
import {useEffect, useState} from "react";
import {getComments} from "../../placesTape/comments/scripts";
import {setPostById, postLikeAction} from "./scripts/postCardScripts";
import {SkeletonContainer} from "../../placesTape/placeCard/styles";

const PostCard = (props) => {

    const [showComments, setShowComments] = useState(false);
    const [commentsData, setCommentsData] = useState('');
    const [postData, setPostData] = useState(props.postData);
    let ac = new AbortController();
    useEffect(()=>{

        if(showComments){
            getComments(setCommentsData, props.id, ac);
        }
        return () => ac.abort();
    }, [showComments])

    async function handleLike(){
        await postLikeAction(postData._id)
        await setPostById(postData._id,setPostData, ac);
    }

    const usrImg = props.userImg ? props.userImg : null;
    if(!props.skeleton) return (

        <StyledCard>

            <UserInfo>
                <Avatar src={usrImg} sx={{width: 65, height: 65}}/>
                <UserName>{props.username}</UserName>
            </UserInfo>

            <StyledText>
                {props.text}
            </StyledText>
            <ButtonBlock>
                <ActionButtons removeVisible={props.isPriveleged} removeAction={() => deletePost(props.id, props.setPosts, props.ac)}
                likeCount={postData.likes} commentCount={postData.comments} isLiked={postData.isLiked} likeAction={() => handleLike()}
                               commentAction={() => setShowComments(!showComments)} commentVisible={true}/>
            </ButtonBlock>
            {showComments ?  <div>
                <Comments data={commentsData} />
                <SendComment ac={ac} commentOf='posts' id={props.id} updateComments={setCommentsData} updateData={() => setPostById(postData._id,setPostData, ac)}/>
            </div> : null }


        </StyledCard>
    );
    if(props.skeleton) return(
        <StyledCard>
            <UserInfo>
                <SkeletonAvatar variant='circular' animation='wave'/>
                <SkeletonUser animation='wave'/>
            </UserInfo>
            <SkeletonContent animation='wave' />
            <SkeletonContent animation='wave'/>
            <SkeletonContent animation='wave'/>
            <ActionButtons inactive={true} commentVisible={true} />
        </StyledCard>
    );
}

export {PostCard}
