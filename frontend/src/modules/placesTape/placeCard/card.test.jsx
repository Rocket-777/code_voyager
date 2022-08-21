
import {PlaceCard} from "./index";
import renderer from 'react-test-renderer'
import {BrowserRouter, MemoryRouter} from "react-router-dom";
import {StyledContainer} from "../styles";

const cardData = {
    "_id": "62ec3d69ce859ef59ef718c1",
    "place_name": "sdfg",
    "place_description": "sdfg",
    "usersLiked": ["62ec3da1ce859ef59ef718c2"],
    "comments": 0,
    "likes": 1,
    "image": "http://localhost:3003/uploads/e1d18ee3d720c1ad273f1659649385919.jpeg",
    "favoriteCount": 1,
    "approved": true,
    "place_description_full": "sdfg",
    "place_address": "df",
    "contact_info": "df",
    "geo": "54.52608325271034,36.25879837036103"};

it('card renders correctly', ()=>{
    const tree = renderer.create(
            <BrowserRouter>
                <StyledContainer key={cardData._id}>
                    <PlaceCard cardData={cardData} />
                </StyledContainer>
            </BrowserRouter>
        ).toJSON();
    expect(tree).toMatchSnapshot();
})
