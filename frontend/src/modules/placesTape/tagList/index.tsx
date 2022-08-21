import {Container} from './styles'
import {Tag} from './tag'

import {useAppSelector, useAppDispatch} from "../../../reduxStore/reduxHooks";
//import {setValue, selectVal} from "../../reduxStore/reducers/stateSlice";
import {testSlice} from "../../../reduxStore/reducers/stateSlice";

const TagList = () => {

    const dispatch = useAppDispatch();
    const {setValue} = testSlice.actions;


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
            >{useAppSelector((state) => state.test.value)}</button>
        </Container>
    );
}

export { TagList }
