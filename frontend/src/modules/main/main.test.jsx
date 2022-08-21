import {Main} from "./index";
import renderer from 'react-test-renderer'
import {BrowserRouter, MemoryRouter} from "react-router-dom";


it('renders correctly', ()=>{
    const tree = renderer.create(
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})
