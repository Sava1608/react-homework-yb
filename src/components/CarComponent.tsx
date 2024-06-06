import React, {FC, PropsWithChildren} from 'react';
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";

interface IProps extends PropsWithChildren{
    car:ICarWithAuthModel;
}
const CarComponent:FC<IProps> = ({car}) => {
    const {id,brand,year,price} = car
    return (
        <div>
            <div>Car ID: {id}</div>
            <div>Brand Car: {brand}</div>
            <div>Year Car: {year}</div>
            <div>Car Price: {price}</div>
        </div>
    );
};

export default CarComponent;