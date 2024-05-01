import React, {FC} from 'react';
import './Product.css'
export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}
const Product:FC<IProductProps> = ({id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images}) => {
    return (
        <div className={'Product'}>
            <h1>{id}.{title}</h1>
            <p>{description}</p>
            <h2>Price: {price}$ --- Promotion: {discountPercentage}%</h2>
            {
                images.map((value,index) => <img key={index} src={value} alt='#'/>)
            }
            <ul>
                <li>Rating: {rating}</li>
                <li>State: {stock}</li>
                <li>Brand: {brand}</li>
                <li>Category: {category}</li>
                <li>{thumbnail}</li>
            </ul>
        </div>
    );
};

export default Product;