import {PlacesTapeContainer} from "./styles";
import {PlaceCard} from "./placeCard";
import {PlaceCreator} from "./createPlace";
import {useState} from "react";
import {useEffect} from "react";
import {getPlaces} from "./scripts/placesUtils";

const PlacesTape = (props) => {

    const [places, setPlaces] = useState(null);

    useEffect(() => {
        if(places == null){
            getPlaces(setPlaces);
        }

    }, [places]);

    return(

        <PlacesTapeContainer>
            { props.isAuth ? <PlaceCreator setPlaces={setPlaces}/> : null}
            { places ? places.map(item =>
                <PlaceCard cardData={item}/>
            ) : null}


        </PlacesTapeContainer>
    );
}

export {PlacesTape}