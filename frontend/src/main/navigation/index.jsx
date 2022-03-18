import {StyledFabUpwards, StyledFabBack} from "./styles";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const NavigateTop = (props) => {
    const [scrollPos, setScrollPos] = useState(0);
    useEffect(() => {
        const scrollAble = document.getElementById(props.elemId)
        scrollAble.addEventListener('scroll', () => setScrollPos(scrollAble.scrollTop));
        return () => {
            scrollAble.removeEventListener('scroll', () => setScrollPos(scrollAble.scrollTop));
        }
    }, [])


    if (scrollPos > 1500) {
        return (<StyledFabUpwards onClick={e => document.getElementById(props.elemId).scrollTo({top: 0, behavior: "smooth"})}>
            <KeyboardArrowUpIcon sx={{fontSize: 70, color: 'white'}}/>
        </StyledFabUpwards>)
    } else {
        return null;
    }
}

const NavigateBack = () => {
    const navigate = useNavigate();

    return(
        <StyledFabBack onClick={e => navigate(-1)}>
            <KeyboardArrowLeftIcon sx={{fontSize: 70, color: 'white'}}/>
        </StyledFabBack>
    );

}

export {NavigateTop,NavigateBack}
