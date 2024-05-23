import {IResponse} from "../types/resType";
import {ApiService} from "./api.service";
import {allURL} from "../consts/urls";
import {IPost} from "../interfaces/postInterface";

export const postService = {
    getAll: ():IResponse<IPost[]> => ApiService.get(allURL.posts)
}