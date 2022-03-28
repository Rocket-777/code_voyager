import {ActionContainer, ActionButton, ButtonContainer, LikeActive, LikeInactive,CommentSign, FavoriteInactive, FavoriteActive,
RemoveContainer, RemoveButton, RemoveSign} from "./styles";


const ActionButtons = ({isLiked, likeCount, commentCount, isFavorite,
                       likeAction, commentVisible,commentAction, favoriteAction, favoriteVisible,
                           removeAction, removeVisible}) => {


    return(
        <ActionContainer onClick={e => e.preventDefault()}>
            <ButtonContainer>
                <ActionButton onClick={e => likeAction()} >
                    {isLiked ? <LikeActive/> : <LikeInactive/>}
                    {likeCount !== 0 ? likeCount : null}
                </ActionButton>

                {commentVisible ? <ActionButton onClick={e =>  commentAction()} id='comment-button'  >
                    <CommentSign/>
                    {commentCount !== 0 ? commentCount : null}
                </ActionButton> : null}

                { favoriteVisible ?  <ActionButton onClick={e => favoriteAction()} >
                    {isFavorite ? <FavoriteActive/> : <FavoriteInactive/>}
                </ActionButton> : null}
            </ButtonContainer>
            {removeVisible ? <RemoveContainer>
                <RemoveButton onClick={e => removeAction()} >
                    <RemoveSign/>
                </RemoveButton>
            </RemoveContainer> : null}

        </ActionContainer>
    );

}

export{ActionButtons}
