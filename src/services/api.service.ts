import axios from "axios";
import {baseURL} from "../consts/urls";

export const ApiService = axios.create({baseURL});