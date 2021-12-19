import {PostTapeContainer} from "./styles";
import {PostCard} from "./postCard";
import {CreatePost} from "./createPost";
import {useEffect, useState} from "react";
import {initPosts} from "./scripts/postsScr";

const PostTape = (props) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        initPosts(setPosts);
    }, [posts]);
    return(

        <PostTapeContainer>
            {props.isAuth? <CreatePost setPosts={setPosts}/> : null}

            {posts ? posts.reverse().map(item => {
                return <PostCard username={item.username} text={item.text} userImg={item.usrImage}/>
            }) : null}


        </PostTapeContainer>
    );
}


export {PostTape}