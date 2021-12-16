import {PlacesTapeContainer, ButtonContainer, StyledButton} from "./styles";
import {PlaceCard} from "./placeCard";
import {PlaceCreator} from "./createPlace";
import {useState} from "react";
import {useEffect} from "react";
import {getPlaces} from "./scripts/placesUtils";

const PlacesTape = (props) => {

    const [places, setPlaces] = useState(null);
    const [displayPlaces, setDisplayPlaces] = useState("approved");

    useEffect(() => {
        if(places == null){
            getPlaces(setPlaces, displayPlaces);
        }

    }, [places]);

    return(

        <PlacesTapeContainer>
            <PlaceCreator setPlaces={setPlaces} isPrivileged={props.usrData.status === 'Модератор' || props.usrData.status === 'Администратор'}/>
            {props.usrData.status === 'Модератор' || props.usrData.status === 'Администратор' ? <ButtonContainer>
                <StyledButton  sx={ displayPlaces === 'approved' ? {backgroundColor: '#bec9eb'} : null}
                onClick={e => {setDisplayPlaces('approved'); setPlaces(null)}}>Подтвержденные</StyledButton>
                <StyledButton  sx={ displayPlaces === 'proposed' ? {backgroundColor: '#bec9eb'} : null}
                onClick={e => {setDisplayPlaces('proposed'); setPlaces(null)}}>Предложения пользователей</StyledButton>
            </ButtonContainer> : null}
            { places ? places.reverse().map(item =>
                <PlaceCard key={item._id} cardData={item} setPlaces={setPlaces} displayRemoveButton={props.usrData.status === 'Модератор' || props.usrData.status === 'Администратор'}/>
            ) : null}


        </PlacesTapeContainer>
    );
}

export {PlacesTape}