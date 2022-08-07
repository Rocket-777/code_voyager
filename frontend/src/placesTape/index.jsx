import {ButtonContainer, PlacesTapeContainer, StyledButton, StyledContainer, ProposeBtn, ProposeIcon} from "./styles";
import {PlaceCard} from "./placeCard";

import React, {useEffect, useState} from "react";
import {getPlaces} from "./scripts/placesUtils";
import {NavigateTop} from "../main/navigation";
import {Footer} from "../main/footer";
import {Link} from "react-router-dom";
import {TagList} from "./tagList";

const PlacesTape = (props) => {

    const [places, setPlaces] = useState(null);
    const [displayPlaces, setDisplayPlaces] = useState('approved');
    const [isLoading, setIsLoading] = useState(true);
    let ac = new AbortController();
    useEffect(() => {

        getPlaces(setPlaces, displayPlaces, ac).then(res => {
            if (!ac.signal.aborted) setIsLoading(false);
            handleScrollPos();
        });
        return () => ac.abort();
    }, [displayPlaces])


    const handleScrollPos = () => {
        const scrollPos = sessionStorage.getItem('scrollPosition');
        if (scrollPos) {
            const elem = document.getElementById('placeTape');
            if (elem) {
                elem.scrollTo(0, parseInt(scrollPos));
                sessionStorage.removeItem('scrollPosition');
            }

        }
    }

    const handleTransition = () => {
        const scrollPos = document.getElementById('placeTape').scrollTop.toString();
        sessionStorage.setItem('scrollPosition', scrollPos);
    }

    if (!isLoading) return (

        <PlacesTapeContainer id='placeTape'>
            <NavigateTop elemId='placeTape'/>
            <Link to='/proposal' style={{width: "60%", margin: "auto", marginTop: "1rem", textDecoration: "none"}}>
                <ProposeBtn style={{width: "100%"}}>
                    <ProposeIcon/>
                    Предложить
                </ProposeBtn>
            </Link>
            <TagList/>
            {props.usrData.status === 'Модератор' || props.usrData.status === 'Администратор' ?
                <ButtonContainer>
                    <StyledButton sx={displayPlaces === 'approved' ? {backgroundColor: '#C6CCF9'} : null}
                                  onClick={e => {
                                      e.preventDefault();
                                      setDisplayPlaces('approved');
                                      setIsLoading(true);
                                  }}>Подтвержденные</StyledButton>
                    <StyledButton sx={displayPlaces === 'proposed' ? {backgroundColor: '#C6CCF9'} : null}
                                  onClick={e => {
                                      e.preventDefault();
                                      setDisplayPlaces('proposed');
                                      setIsLoading(true);
                                  }}>Предложения пользователей</StyledButton>
                </ButtonContainer> : null}
            <PlaceCard skeleton={true}/>
            {places ? places.map(item =>

                <StyledContainer key={item._id}>
                    <PlaceCard isAuth={props.isAuth} cardData={item} setPlaces={setPlaces}
                               placesState={displayPlaces} handleTransition={handleTransition}
                               displayRemoveButton={props.usrData.status === 'Модератор' || props.usrData.status === 'Администратор'}/>
                </StyledContainer>
            ) : null}

            <Footer/>


        </PlacesTapeContainer>
    );
    if (isLoading) return (
        <PlacesTapeContainer id='placeTape'>
            <Link to='/proposal' style={{width: "60%", margin: "auto", marginTop: "1rem"}}>
                <button style={{width: "100%"}} disabled={true}>
                    Предложить
                </button>
            </Link>
            {props.usrData.status === 'Модератор' || props.usrData.status === 'Администратор' ?
                <ButtonContainer>
                    <StyledButton sx={displayPlaces === 'approved' ? {backgroundColor: '#bec9eb'} : null}
                                  onClick={e => {
                                      e.preventDefault();
                                      setDisplayPlaces('approved');
                                      setIsLoading(true);
                                  }}>Подтвержденные</StyledButton>
                    <StyledButton sx={displayPlaces === 'proposed' ? {backgroundColor: '#bec9eb'} : null}
                                  onClick={e => {
                                      e.preventDefault();
                                      setDisplayPlaces('proposed');
                                      setIsLoading(true);
                                  }}>Предложения пользователей</StyledButton>
                </ButtonContainer> : null}
            <PlaceCard skeleton={true}/>
            <PlaceCard skeleton={true}/>
            <PlaceCard skeleton={true}/>
            <PlaceCard skeleton={true}/>
            <PlaceCard skeleton={true}/>
            <Footer/>
        </PlacesTapeContainer>
    );
}

export {PlacesTape}
