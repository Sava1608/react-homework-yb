import React, {FC} from 'react';
import {IComment} from "../../../interfaces/commentInterface";

interface IProps{
    comment:IComment;
}
const CommentsOfPostComponet:FC<IProps> = ({comment}) => {
    return (
        <div>
            <div>POST ID:{comment.postId}</div>
            <div>ID: {comment.id}</div>
            <div>NAME: {comment.name}</div>
            <div>BODY: {comment.body}</div>
            <div>EMAIL: {comment.email}</div>
            <br/>
        </div>
    );
};

export default CommentsOfPostComponet;