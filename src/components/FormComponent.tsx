import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../models/AuthDataModel";
import {authService} from "../services/api.service";

const FormComponent = () => {
    const {
        handleSubmit,
        register
    } = useForm<AuthDataModel>({defaultValues:{username:'userSZ1', password:'P@$$word1'}});

    const [isAuthState, setIsAuthState] = useState<boolean>(false)

    const auth = async (formData:AuthDataModel) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth);
    }

    return (
        <div>
            <h1>login form</h1>
            <div>
                {
                    isAuthState ? <span>'ok'</span>:<span>'not ok'</span>
                }
            </div>
            <form onSubmit={handleSubmit(auth)}>
                <input type={"text"} {...register('username')}/>
                <input type={"text"} {...register('password')}/>
                <button>Click me</button>
            </form>
        </div>
    );
};

export default FormComponent;