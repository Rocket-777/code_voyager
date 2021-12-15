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
            { props.usrData.status === 'Модератор' || props.usrData.status === 'Администратор' ? <PlaceCreator setPlaces={setPlaces}/> : null}
            { places ? places.reverse().map(item =>
                <PlaceCard key={item._id} cardData={item} setPlaces={setPlaces} displayRemoveButton={props.usrData.status === 'Модератор' || props.usrData.status === 'Администратор'}/>
            ) : null}


        </PlacesTapeContainer>
    );
}

export {PlacesTape}