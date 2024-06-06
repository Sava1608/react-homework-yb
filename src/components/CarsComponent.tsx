import React, {useEffect, useState} from 'react';
import {carService} from "../services/api.service";
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";
import CarComponent from "./CarComponent";


const CarsComponent = () => {

    const [cars, setCars] = useState<ICarWithAuthModel[]>([])

    useEffect(() => {
        // @ts-ignore
        carService.getCars().then(({data}) => setCars(data))
    }, []);
    return (
        <div>
            {cars.map(car => <CarComponent  car={car}/>)}
        </div>
    );
};

export default CarsComponent;