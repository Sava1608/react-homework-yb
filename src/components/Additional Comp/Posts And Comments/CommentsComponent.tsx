import React, {FC} from 'react';
import {IComment} from "../../../interfaces/commentInterface";
import CommentsOfPostComponet from "./CommentsOfPostComponet";

interface IProps{
    comments:IComment[];
}
const CommentsComponent:FC<IProps> = ({comments}) => {

    return (
        <div>
            {
                comments.map(comment => <CommentsOfPostComponet key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;