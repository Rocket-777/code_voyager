import {StyledFabUpwards, StyledFabBack} from "./styles";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {animateScroll} from "./scripts";

const NavigateTop = (props) => {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const scrollAble = document.getElementById(props.elemId);
        const listener = () => setScrollPos(scrollAble.scrollTop);
        scrollAble.addEventListener('scroll', listener);
        return () => {
            scrollAble.removeEventListener('scroll', listener);
        }
    }, [])

    if (scrollPos > 1500) {
        return (<StyledFabUpwards onClick={e => animateScroll(document.getElementById(props.elemId), scrollPos )}>
            <KeyboardArrowUpIcon sx={{fontSize: 70, color: 'white'}}/>
        </StyledFabUpwards>)
    } else {
        return null;
    }
}

const NavigateBack = () => {
    const navigate = useNavigate();
    function handleBack(){
        navigate(-1);
    }

    return(
        <StyledFabBack onClick={e => handleBack()}>
            <KeyboardArrowLeftIcon sx={{fontSize: 70, color: 'white'}}/>
        </StyledFabBack>
    );

}

export {NavigateTop,NavigateBack}
