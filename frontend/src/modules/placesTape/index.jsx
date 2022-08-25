import {ButtonContainer, PlacesTapeContainer, StyledButton, StyledContainer, ProposeBtn, ProposeIcon} from "./styles";
import {PlaceCard} from "./placeCard";

import {useEffect} from "react";
import {NavigateTop} from "../main/navigation";
import {Footer} from "../main/footer";
import {Link} from "react-router-dom";
import {TagList} from "./tagList";

import {useAppDispatch, useAppSelector} from "../../reduxStore/reduxHooks";
import {fetchPlaces} from "../../reduxStore/reducers/Actions";
import {placesSlice} from "../../reduxStore/reducers/placesSlice";

const PlacesTape = (props) => {

    const dispatch = useAppDispatch();
    const placesData = useAppSelector((state) => state.places);
    const userStatus = useAppSelector((state) => state.user.userData.status)
    const {setShowProposed, setShowApproved} = placesSlice.actions;
    const ac = new AbortController();
    useEffect(() => {
        dispatch(fetchPlaces(ac, placesData.showApproved, handleScrollPos));
        //if (!ac.signal.aborted) setIsLoading(false);
        return () => ac.abort();
    }, [placesData.showApproved])


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

    if (!placesData.isLoading) return (

        <PlacesTapeContainer id='placeTape'>
            <NavigateTop elemId='placeTape'/>
            <Link to='/proposal' style={{width: "60%", margin: "auto", marginTop: "1rem", textDecoration: "none"}}>
                <ProposeBtn style={{width: "100%"}}>
                    <ProposeIcon/>
                    Предложить
                </ProposeBtn>
            </Link>
            <TagList/>
            {userStatus === 'Moderator' || userStatus === 'Admin' ? <ButtonContainer>
                <StyledButton sx={placesData.showApproved === 'approved' ? {backgroundColor: '#C6CCF9'} : null}
                              onClick={e => {
                                  e.preventDefault();
                                  dispatch(setShowApproved());
                              }}>Подтвержденные</StyledButton>
                <StyledButton sx={placesData.showApproved === 'proposed' ? {backgroundColor: '#C6CCF9'} : null}
                              onClick={e => {
                                  e.preventDefault();
                                  dispatch(setShowProposed());
                              }}>Предложения пользователей</StyledButton>
            </ButtonContainer> : null}
            <PlaceCard skeleton={true}/>
            {placesData.data ? placesData.data.map(item =>

                <StyledContainer key={item._id}>
                    <PlaceCard cardData={item} handleTransition={handleTransition}/>
                </StyledContainer>) : null}
            <Footer/>
        </PlacesTapeContainer>); else if (placesData.isLoading) return (<PlacesTapeContainer id='placeTape'>
            <Link to='/proposal' style={{width: "60%", margin: "auto", marginTop: "1rem", textDecoration: "none"}}>
                <ProposeBtn style={{width: "100%"}}>
                    <ProposeIcon/>
                    Предложить
                </ProposeBtn>
            </Link>
            {userStatus === 'Moder' || userStatus === 'Администратор' ? <ButtonContainer>
                <StyledButton sx={placesData.showApproved === 'approved' ? {backgroundColor: '#bec9eb'} : null}
                >Подтвержденные</StyledButton>
                <StyledButton sx={placesData.showApproved === 'proposed' ? {backgroundColor: '#bec9eb'} : null}
                >Предложения пользователей</StyledButton>
            </ButtonContainer> : null}
            <PlaceCard skeleton={true}/>
            <PlaceCard skeleton={true}/>
            <PlaceCard skeleton={true}/>
            <PlaceCard skeleton={true}/>
            <PlaceCard skeleton={true}/>
            <Footer/>
        </PlacesTapeContainer>); else return null;
}

export {PlacesTape}
