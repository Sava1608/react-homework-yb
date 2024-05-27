import {IResponse} from "../types/resType";
import {IUser} from "../interfaces/userInterface";
import {ApiService} from "./api.service";
import {allURL} from "../consts/urls";
import {IPost} from "../interfaces/postInterface";
import {AxiosResponse} from "axios";

export const userService = {
    getAll: ():IResponse<IUser[]> => ApiService.get(allURL.users),

    // Це нова функція якщо можна так назвати, вже з додаткового дз
    getPostsOfUsers: (userId:string):Promise<AxiosResponse<IPost[]>> => {
        return ApiService.get(`/users/${userId}/posts`)
    }
}