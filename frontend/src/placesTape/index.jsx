import {PlacesTapeContainer, ButtonContainer, StyledButton, StyledLink} from "./styles";
import {PlaceCard} from "./placeCard";
import {PlaceCreator} from "./createPlace";
import React, {useState} from "react";
import {useEffect} from "react";
import {getPlaces} from "./scripts/placesUtils";
import {NavigateTop} from "../main/navigation";
import {Footer} from "../main/footer";
import {Loader} from "../main/loading";

const PlacesTape = (props) => {

    const [places, setPlaces] = useState(null);
    const [displayPlaces, setDisplayPlaces] = useState('approved');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
       getPlaces(setPlaces, displayPlaces).then(res => {handleScrollPos(); setIsLoading(false)});

    }, [displayPlaces])


    const handleScrollPos = () => {
        const scrollPos = sessionStorage.getItem('scrollPosition');
        if(scrollPos){
            document.getElementById('placeTape').scrollTo(0, parseInt(scrollPos));
            sessionStorage.removeItem('scrollPosition');
        }
    }

    const handleTransition = () => {
        const scrollPos = document.getElementById('placeTape').scrollTop.toString();
        sessionStorage.setItem('scrollPosition', scrollPos);
    }

    return(

        <PlacesTapeContainer id='placeTape' >
            <NavigateTop elemId='placeTape'/>
          {props.isAuth && !isLoading ? <PlaceCreator placeStatus={displayPlaces} setPlaces={setPlaces} isPrivileged={props.usrData.status === 'Модератор' || props.usrData.status === 'Администратор'}/> : null}

                {props.usrData.status === 'Модератор' || props.usrData.status === 'Администратор' && !isLoading ? <ButtonContainer>
                    <StyledButton  sx={ displayPlaces === 'approved' ? {backgroundColor: '#bec9eb'} : null}
                                   onClick={e => {e.preventDefault(); setDisplayPlaces('approved'); }}>Подтвержденные</StyledButton>
                    <StyledButton  sx={ displayPlaces === 'proposed' ? {backgroundColor: '#bec9eb'} : null}
                                   onClick={e => {e.preventDefault(); setDisplayPlaces('proposed'); }}>Предложения пользователей</StyledButton>
                </ButtonContainer> : null}

                { places && !isLoading ? places.map(item =>

                    <StyledLink to={'/places/' + item._id} key={item._id} onClick={e => handleTransition()} >

                        <PlaceCard  isAuth={props.isAuth} key={item._id} cardData={item} setPlaces={setPlaces} placesState={displayPlaces}
                                    displayRemoveButton={props.usrData.status === 'Модератор' || props.usrData.status === 'Администратор'}/>
                    </StyledLink>
                ) : null}
            {isLoading ? <Loader/> : null}



            <Footer/>



        </PlacesTapeContainer>
    );
}

export {PlacesTape}
