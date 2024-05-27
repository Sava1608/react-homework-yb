import {IResponse} from "../types/resType";
import {ApiService} from "./api.service";
import {allURL} from "../consts/urls";
import {IPost} from "../interfaces/postInterface";
import {AxiosResponse} from "axios";
import {IComment} from "../interfaces/commentInterface";

export const postService = {
    getAll: ():IResponse<IPost[]> => ApiService.get(allURL.posts),

    getAllComments: (postId:string):Promise<AxiosResponse<IComment[]>> => {
        return ApiService.get(`/posts/${postId}/comments`)
    }
}