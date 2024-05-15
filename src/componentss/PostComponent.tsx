import React, {FC} from 'react';

interface IPostProps{
    title:string;
    body:string;
}
const FormComponent:FC = () => {



    return (
        <div>
            <form>
                <input type="text"/>
                <input type="text"/>
                <input type="number"/>
                <button>Click me</button>
            </form>
        </div>
    );
};

export default FormComponent;