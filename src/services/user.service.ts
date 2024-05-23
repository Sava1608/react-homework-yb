import {IResponse} from "../types/resType";
import {IUser} from "../interfaces/userInterface";
import {ApiService} from "./api.service";
import {allURL} from "../consts/urls";

export const userService = {
    getAll: ():IResponse<IUser[]> => ApiService.get(allURL.users)
}