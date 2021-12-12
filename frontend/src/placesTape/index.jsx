import {PlacesTapeContainer} from "./styles";
import {PlaceCard} from "./placeCard";
import {PlaceCreator} from "./createPlace";

const PlacesTape = () => {

    return(

        <PlacesTapeContainer>
            <PlaceCreator/>
            <PlaceCard text='ABSOLUTELY RANDOM PLACE'/>
            <PlaceCard text='ABSOLUTELY NOT RANDOM PLACE'/>
        </PlacesTapeContainer>
    );
}

export {PlacesTape}