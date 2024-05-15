import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";

interface IPostProps{
    id:number;
    title:string;
    body:string;
    userId:number;
}
const FormComponent:FC = () => {
let {register,
    handleSubmit,
    formState:{errors,}
} = useForm<IPostProps>({mode:"all", resolver: joiResolver(postValidator)});


const save = ({title,body,userId}:IPostProps) =>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" {...register('title')}/>
                {errors.title && <span>{errors.title.message}</span>}
                <br/>
                <input type="text" {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}
                <br/>
                <input type="number" {...register('userId')}/>
                {errors.userId && <span>{errors.userId.message}</span>}
                <br/>
                <button>Click me</button>
            </form>
        </div>
    );
};

export default FormComponent;