import {IResponse} from "../types/resType";
import {IComment} from "../interfaces/commentInterface";
import {ApiService} from "./api.service";
import {allURL} from "../consts/urls";

export const commentsService = {
    getAll:():IResponse<IComment[]> => ApiService.get(allURL.comments)
}