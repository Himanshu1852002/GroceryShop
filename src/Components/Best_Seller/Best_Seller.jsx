// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Best_Seller.css';
import annar_image from '../Assets/Images/annar.png';
import simla_chilli_image from '../Assets/Images/simla-cilli.png';
import sprite_image from '../Assets/Images/sprite.png';
import pringles_image from '../Assets/Images/pringles.png';
import orange_image from '../Assets/Images/orange.png';
import kinder_joy_image from '../Assets/Images/kinder-joy.png';
import strowberry_image from '../Assets/Images/strowberry.png';
import oil_image from '../Assets/Images/oil.png';

const products = [
    { imgSrc: annar_image, altText: "Annar", name: "Pomegranate - 1kg", price: "60rs" },
    { imgSrc: simla_chilli_image, altText: "Simla Chilli", name: "Shimla-Chilli - 1kg", price: "40rs" },
    { imgSrc: sprite_image, altText: "Sprite", name: "Sprite - 1Lt", price: "60rs" },
    { imgSrc: pringles_image, altText: "Pringles", name: "Pringles - 1pc", price: "50rs" },
    { imgSrc: orange_image, altText: "Orange", name: "Orange - 1kg", price: "90rs" },
    { imgSrc: kinder_joy_image, altText: "Kinder Joy", name: "Kinder-Joy - 1pc", price: "40rs" },
    { imgSrc: strowberry_image, altText: "Strawberry", name: "Strawberry - 1kg", price: "100rs" },
    { imgSrc: oil_image, altText: "Oil", name: "Oil - 1kg", price: "120rs" },
];

const BestSeller = () => {
    return (
        <div className="sell-box">
            <div className="container">
                <h2 className="text-center mb-5">Best Selling <span>Products</span></h2>
                <div className="row">
                    {products.map((product, index) => (
                        <div className="col-md-3 col-sm-6 col-6" key={index}>
                            <div className="best-seller-card">
                                <span className="badge">Best 👍</span>
                                <img src={product.imgSrc} alt={product.altText} />
                                <h5>{product.name}</h5>
                                <p className="price">{product.price}</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BestSeller;
