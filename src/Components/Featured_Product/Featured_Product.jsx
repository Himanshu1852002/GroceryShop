// eslint-disable-next-line no-unused-vars
import React from "react";
import './Featured_Product.css';
import apple_img from '../Assets/Images/apple.png';
import banana_img from '../Assets/Images/banana.png';
import dairyMilk_img from '../Assets/Images/dairmilk.png';
import popcorn_img from '../Assets/Images/popcorn,png.png';
import tomato_img from '../Assets/Images/tomato.png';
import coca_cola_img from '../Assets/Images/coca-cola.png';
import termaric_img from '../Assets/Images/termaric.png';

const products = [
    { imgSrc: apple_img, altText: "Apple", name: "Apple - 1kg", price: "80rs" },
    { imgSrc: banana_img, altText: "Banana", name: "Banana - 12pc", price: "40rs" },
    { imgSrc: dairyMilk_img, altText: "DairyMilk", name: "DairyMilk - 1pc", price: "40rs" },
    { imgSrc: popcorn_img, altText: "Popcorn", name: "Popcorn - 1pc", price: "50rs" },
    { imgSrc: tomato_img, altText: "Tomato", name: "Tomato - 1kg", price: "90rs" },
    { imgSrc: coca_cola_img, altText: "Coca-Cola", name: "Coca-Cola - 1lt", price: "40rs" },
    { imgSrc: apple_img, altText: "Apple", name: "Apple - 1kg", price: "80rs" },
    { imgSrc: termaric_img, altText: "Termaric", name: "Termaric - 1kg", price: "120rs" },
];

const FeaturedProduct = () => {
    return (
        <div className="box">
            <div className="container">
                <h2 className="text-center mb-5">Featured <span>Products</span></h2>
                <div className="row">
                    {products.map((product, index) => (
                        <div className="col-md-3 col-sm-6 col-6" key={index}>
                            <div className="product-card">
                                <span className="badge">Featured</span>
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
};

export default FeaturedProduct;
