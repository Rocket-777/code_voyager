import {TagBase, TagIcon} from "./styles";

interface ITagProps {
    text?: string;
}

const Tag = ({text}: ITagProps) => {
    return(
        <TagBase>
            <TagIcon/>
            {text}
        </TagBase>
    );
}

export {Tag}
