import {Container} from './styles'
import {Tag} from './tag/index'

import {useAppSelector, useAppDispatch} from "../../reduxHooks";
import {setValue, selectVal} from "./stateSlice";


const TagList = () => {

    const dispatch = useAppDispatch();

    return(
        <Container>
            <Tag text='TagDummy'/>
            <Tag text='TagDummy'/>
            <Tag text='TagDummy'/>
            <Tag text='TagDummy'/>
            <Tag text='TagDummy'/>
            <Tag text='TagDummy'/>
            <Tag text='TagDummy'/>
            <Tag text='TagDummy'/>
            <Tag text='TagDummy'/>
            <Tag text='Tag'/>
            <button
            onClick={() => {
                let arr:string[] = [];
                for(let i = 0; i < 10; i++){
                    arr.push(Math.round((Math.random() * 10)).toString());
                }
                dispatch(setValue(String(arr)))
            }}
            >{useAppSelector(selectVal)}</button>
        </Container>
    );
}

export { TagList }
