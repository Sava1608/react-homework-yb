import React, {useEffect, useState} from 'react';
import {carService} from "../services/api.service";
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";
import CarComponent from "./CarComponent";


const CarsComponent = () => {

    const [cars, setCars] = useState<ICarWithAuthModel[]>([])

    useEffect(() => {

        carService.getCars().then((value) => value ? setCars(value.items) : [])
    }, []);
    return (
        <div>
            {cars.map(car => <CarComponent key={car.id} car={car}/>)}

        </div>
    );
};

export default CarsComponent;