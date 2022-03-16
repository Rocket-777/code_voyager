import {StyledFab} from "./styles";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useEffect, useState} from "react";

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
        return (<StyledFab onClick={e => document.getElementById(props.elemId).scrollTo({top: 0, behavior: "smooth"})}>
            <KeyboardArrowUpIcon sx={{fontSize: 70, color: 'white'}}/>
        </StyledFab>)
    } else {
        return null;
    }
}

export {NavigateTop}
