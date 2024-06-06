import React, {FC, PropsWithChildren} from 'react';
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";

interface IProps extends PropsWithChildren{
    car:ICarWithAuthModel;
}
const CarComponent:FC<IProps> = ({car}) => {
    const {id,brand,price,year } = car
    return (
        <div>
            <div>Car ID: {id}</div>
            <div>Car Brand: {brand}</div>
            <div>Car Price: {price}</div>
            <div>Car Year: {year}</div>
        </div>
    );
};

export default CarComponent;