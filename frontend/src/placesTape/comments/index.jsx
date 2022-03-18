import {CommentContainer} from "./styles";
import {CommentCard} from "./commentCard";
import {PrettyDivider} from "../placeDetailed/divider";


const Comments = (props) => {


    return(
        <CommentContainer>
            <PrettyDivider textVal='Комментарии'/>

            {props.data ? props.data.map(item => {
                return <CommentCard key={item._id} user={item.username} usrImg={item.usrImage} comment={item.comment}/>
            }) : null}
        </CommentContainer>

    );

}

export {Comments}
