import {ActionContainer, ActionButton, ButtonContainer, LikeActive, LikeInactive,CommentSign, FavoriteInactive, FavoriteActive,
RemoveContainer, RemoveButton, RemoveSign} from "./styles";

const ActionButtons = ({isLiked, likeCount, commentCount, isFavorite,
                       likeAction, commentAction, favoriteAction, favoriteVisible,
                           removeAction, removeVisible}) => {

    return(
        <ActionContainer onClick={e => e.preventDefault()}>
            <ButtonContainer>
                <ActionButton onClick={e => likeAction()} >
                    {isLiked ? <LikeActive/> : <LikeInactive/>}
                    {likeCount !== 0 ? likeCount : null}
                </ActionButton>
                <ActionButton onClick={e => commentAction()} >
                    <CommentSign/>
                    {commentCount !== 0 ? commentCount : null}
                </ActionButton>
                { favoriteVisible ?  <ActionButton>
                    {isFavorite ? <FavoriteActive/> : <FavoriteInactive/>}
                </ActionButton> : null}
            </ButtonContainer>
            {removeVisible ? <RemoveContainer>
                <RemoveButton onClick={e => removeAction()} >
                    <RemoveSign/>
                    Удалить
                </RemoveButton>
            </RemoveContainer> : null}

        </ActionContainer>
    );

}

export{ActionButtons}
