import React, {useEffect, useState} from 'react';
import CommentsComponent from "../../../components/Additional Comp/Posts And Comments/CommentsComponent";
import {useParams} from "react-router-dom";
import {IComment} from "../../../interfaces/commentInterface";
import {postService} from "../../../services/post.service";

const PostAndComPage = () => {

    const {id} =  useParams()

    const [comments, setComments] = useState<IComment[]>([])
    useEffect(() => {
        if(id){
            postService.getAllComments(id)
                .then(value => setComments(value.data))
        }
    }, [id]);
    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default PostAndComPage;