import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../models/IPost";

interface PostsState{
    data: IPost[],
    isLoading: boolean,
    error: string
}

const initialState: PostsState = {
    data: [],
    isLoading: false,
    error: ''
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        fetchPosts(state){
            state.isLoading = true
        },
        fetchPostsSuccess(state, action: PayloadAction<IPost[]>){
            state.data = action.payload;
            state.isLoading = false
        },
        fetchPostsFailed(state, action: PayloadAction<string>){
            state.error = action.payload
            state.isLoading = false
        }
    }
})

export default postsSlice.reducer
