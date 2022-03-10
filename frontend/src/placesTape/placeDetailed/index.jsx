import {useParams} from "react-router-dom";

const PlaceDetailed = () => {
    let params = useParams();
    return(
        <div>
            <h1>{'PLACE_ID: ' + params.id}</h1>


        </div>


    );
}

export {PlaceDetailed}
