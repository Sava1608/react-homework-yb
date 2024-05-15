import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";

interface IPostProps{
    title:string;
    body:string;
    userId:number;
}
const FormComponent:FC = () => {
let {register,handleSubmit} = useForm<IPostProps>({mode:"all", resolver:joiResolver(postValidator)});


const save = (postsObj:IPostProps) =>{
    console.log(postsObj)
}
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" {...register('title')}/>
                <input type="text" {...register('body')}/>
                <input type="number" {...register('userId')}/>
                <button>Click me</button>
            </form>
        </div>
    );
};

export default FormComponent;