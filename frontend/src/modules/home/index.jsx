import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


const Home = () => {
    let navigate = useNavigate();
    //redirect
    useEffect(() => {
        navigate('/placesList')
    }, []);
    //====
    return null;
}

export {Home}
