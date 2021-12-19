import {PostTapeContainer} from "./styles";
import {PostCard} from "./postCard";
import {CreatePost} from "./createPost";
import {useEffect, useState} from "react";
import {initPosts} from "./scripts/postsScr";

const PostTape = (props) => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        if(posts == null)
        initPosts(setPosts);
    }, [posts]);
    return(

        <PostTapeContainer>
            {props.isAuth? <CreatePost setPosts={setPosts}/> : null}

            {posts ? posts.map(item => {
                return <PostCard key={item._id} id={item._id} username={item.username} text={item.text}
                                 setPosts={setPosts} userImg={item.usrImage} isPriveleged={item.isPrivileged}/>
            }) : null}


        </PostTapeContainer>
    );
}


export {PostTape}