import React, {useEffect, useState} from 'react';
import {IComment} from "../../interfaces/commentInterface";
import {commentsService} from "../../services/comments.service";
import Comment from "./comment";

const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([])
    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, []);
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;