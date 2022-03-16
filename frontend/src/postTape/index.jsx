import {PostTapeContainer} from "./styles";
import {PostCard} from "./postCard";
import {CreatePost} from "./createPost";
import React, {useEffect, useState} from "react";
import {initPosts} from "./scripts/postsScr";
import {NavigateTop} from "../main/navigation";
import {Footer} from "../main/footer";

const PostTape = (props) => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        if (posts == null)
            initPosts(setPosts);
    }, []);
    return (

        <PostTapeContainer id='postTape'>
            <NavigateTop elemId='postTape'/>
            {props.isAuth ? <CreatePost setPosts={setPosts}/> : null}
            {posts ? posts.map(item => {
                return <PostCard key={item._id} id={item._id} username={item.username} text={item.text}
                                 setPosts={setPosts} userImg={item.usrImage} isPriveleged={item.isPrivileged}/>
            }) : null}
            <Footer/>
        </PostTapeContainer>
    );
}


export {PostTape}
