import {PostTapeContainer} from "./styles";
import {PostCard} from "./postCard";
import {CreatePost} from "./createPost";
import React, {useEffect, useState} from "react";
import {NavigateTop} from "../main/navigation";
import {Footer} from "../main/footer";
import {submitPost} from "./scripts/postsScr";

import {fetchPosts} from "../../reduxStore/reducers/Actions";
import {useAppDispatch, useAppSelector} from "../../reduxStore/reduxHooks";

const PostTape = () => {

    const ac = new AbortController();

    const dispatch = useAppDispatch();
    const postsState = useAppSelector(state => state.posts);
    const userData = useAppSelector(state => state.user);
    useEffect(() => {
        dispatch(fetchPosts(ac));
        return() => ac.abort();
    }, []);

    async function handleSubmit(textVal){
        await submitPost(textVal);
        dispatch(fetchPosts(ac));
    }

    if(!postsState.isLoading) return (

        <PostTapeContainer id='postTape'>
            <NavigateTop elemId='postTape'/>
            {userData.authorized ? <CreatePost handleSubmit={handleSubmit} /> : null}
            <PostCard skeleton={true}/>
            {postsState.data ? postsState.data.map(item => {
                return <PostCard key={item._id} id={item._id} username={item.username} text={item.text} ac={ac}
                                 parAc={ac} userImg={item.usrImage} isPriveleged={item.isPrivileged} postData={item}/>
            }) : null}
            <Footer/>
        </PostTapeContainer>
    );
    else if(postsState.isLoading) return(
        <PostTapeContainer id='postTape'>
            <NavigateTop elemId='postTape'/>
            {userData.authorized ? <CreatePost loading={postsState.isLoading} handleSubmit={handleSubmit} /> : null}
            <PostCard skeleton={true}/>
            <PostCard skeleton={true}/>
            <PostCard skeleton={true}/>
            <PostCard skeleton={true}/>
            <PostCard skeleton={true}/>
            <PostCard skeleton={true}/>
            <PostCard skeleton={true}/>
            <PostCard skeleton={true}/>
            <Footer/>
        </PostTapeContainer>
    );
    else return null;
}


export {PostTape}
