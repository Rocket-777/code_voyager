import {PostTapeContainer} from "./styles";
import {PostCard} from "./postCard";
import {CreatePost} from "./createPost";
import React, {useEffect, useState} from "react";
import {initPosts} from "./scripts/postsScr";
import {NavigateTop} from "../main/navigation";
import {Footer} from "../main/footer";
import {postRequest} from "../httpUtils/httpRequests";
import {Loader} from "../main/loading";

const PostTape = (props) => {
    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    let ac = new AbortController();
    useEffect(() => {

        initPosts(ac).then(res =>{if(!ac.signal.aborted){setIsLoading(false); if(res)setPosts(res.reverse())}} );
        return() => ac.abort();
    }, []);

    async function handleSubmit(textVal){
        await postRequest('http://localhost:3003/news', {postBody: textVal}).then(res => res).catch(e => console.log(e));
        await initPosts(ac).then(res => setPosts(res.reverse()));

    }


    return (

        <PostTapeContainer id='postTape'>
            <NavigateTop elemId='postTape'/>
            {props.isAuth && !isLoading ? <CreatePost setPosts={setPosts} handleSubmit={handleSubmit} /> : null}
            {posts && !isLoading ? posts.map(item => {
                return <PostCard key={item._id} id={item._id} username={item.username} text={item.text} ac={ac}
                                 setPosts={setPosts} userImg={item.usrImage} isPriveleged={item.isPrivileged} postData={item}/>
            }) : null}
            {isLoading ? <Loader/> : null}
            <Footer/>
        </PostTapeContainer>
    );
}


export {PostTape}
