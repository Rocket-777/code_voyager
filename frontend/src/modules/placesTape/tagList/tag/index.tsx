import {TagBase, TagIcon} from "./styles";
import {FC} from "react";

interface ITagProps {
    text?: string;
}

const Tag: FC<ITagProps> = ({text}) => {

    return(
        <TagBase>
            <TagIcon/>
            {text}
        </TagBase>
    );
}

export {Tag}
