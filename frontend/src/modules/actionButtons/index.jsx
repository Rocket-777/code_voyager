import {
    ActionButton,
    ActionContainer,
    ButtonContainer,
    CommentSign,
    FavoriteActive,
    FavoriteInactive,
    LikeActive,
    LikeInactive,
    RemoveButton,
    RemoveContainer,
    RemoveSign,
    Loader,

} from "./styles";
import {Fade, Tooltip} from "@mui/material";
import {useState, useRef, useEffect} from "react";


const ActionButtons = ({
                           inactive, isLiked, likeCount, commentCount, isFavorite,
                           likeAction, commentVisible, commentAction, favoriteAction, favoriteVisible,
                           removeAction, removeVisible
                       }) => {

    const [likeLoading, setLikeLoading] = useState(false);
    const [favoriteLoading, setFavoriteLoading] = useState(false);
    const isMounted = useRef(false);
    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false
        };
    },[])

    function activityLike(){
        return isLiked ? <LikeActive/> : <LikeInactive/>
    }
    function activityFavorite(){
        return isFavorite ? <FavoriteActive/> : <FavoriteInactive/>
    }
    if (!inactive) return (
        <ActionContainer onClick={e => e.preventDefault()}>
            <ButtonContainer>
                <Tooltip title={isLiked ? 'Не нравится' : 'Нравится'} enterDelay={1000} leaveDelay={0} followCursor={true}
                         TransitionComponent={Fade}
                         enterNextDelay={1000} disableInteractive={true}>
                    <ActionButton onClick={e => {
                        setLikeLoading(true);
                        likeAction().then(res => setLikeLoading(false));
                    }}>
                        {likeLoading ? <Loader size={25}/> : activityLike()}
                        {likeCount !== 0 && !likeLoading ? likeCount : null}
                    </ActionButton>
                </Tooltip>


                {commentVisible ?
                    <Tooltip title='Комментарии' enterDelay={1000} leaveDelay={0} TransitionComponent={Fade} followCursor={true}
                             enterNextDelay={1000} disableInteractive={true}>
                        <ActionButton onClick={e => commentAction()} id='comment-button'>
                            <CommentSign/>
                            {commentCount !== 0 ? commentCount : null}
                        </ActionButton>
                    </Tooltip> : null}

                {favoriteVisible ?
                    <Tooltip title={isFavorite ? 'Убрать из избранного' : 'В избранное'} enterDelay={1000} followCursor={true}
                             leaveDelay={0} TransitionComponent={Fade}
                             enterNextDelay={1000} disableInteractive={true}>

                        <ActionButton onClick={e => {
                            setFavoriteLoading(true);
                            favoriteAction().then(res => {
                                if(isMounted.current)
                                setFavoriteLoading(false)
                            });
                        }}>
                            {favoriteLoading ? <Loader size={25}/> : activityFavorite()}
                        </ActionButton>

                    </Tooltip> : null}
            </ButtonContainer>
            {
                removeVisible ? <RemoveContainer>
                    <Tooltip title='Удалить' enterDelay={0} leaveDelay={0} TransitionComponent={Fade}
                             enterNextDelay={500} disableInteractive={true}>
                        <RemoveButton onClick={e => removeAction()}>
                            <RemoveSign/>
                        </RemoveButton>
                    </Tooltip>
                </RemoveContainer> : null
            }

        </ActionContainer>
    );
    if (inactive) return (
        <ActionContainer>
            <ButtonContainer>
                <ActionButton disabled={true}>
                    <LikeInactive/>
                </ActionButton>

                {commentVisible ? <ActionButton id='comment-button' disabled={true}>
                    <CommentSign/>

                </ActionButton> : null}

                {favoriteVisible ? <ActionButton disabled={true}>
                    <FavoriteInactive/>
                </ActionButton> : null}
            </ButtonContainer>


        </ActionContainer>
    );

}

export {ActionButtons}
