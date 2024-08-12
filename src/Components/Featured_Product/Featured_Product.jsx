// eslint-disable-next-line no-unused-vars
import React from "react";
import './Featured_Product.css'
import apple_img from '../Assets/Images/apple.png';
import banana_img from '../Assets/Images/banana.png';
import dairyMilk_img from '../Assets/Images/dairmilk.png';
import popcorn_img from '../Assets/Images/popcorn,png.png';
import tomato_img from '../Assets/Images/tomato.png';
import coca_cola_img from '../Assets/Images/coca-cola.png';
import termaric_img from '../Assets/Images/termaric.png';

const Featured_Product = () => {
    return (
        <div>
            <div className="box">
                <div className="container">
                    <h2 className="text-center  mb-5">Featured <span>Products</span></h2>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className="product-card">
                                <span className="badge">Featured</span>
                                <img src={apple_img} alt="Apple" />
                                <h5>Apple - 1kg</h5>
                                <p className="price">80rs</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className="product-card">
                                <span className="badge">Featured</span>
                                <img src={banana_img} alt="Banana" />
                                <h5>Banana - 12pc</h5>
                                <p className="price">40rs</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className="product-card">
                                <span className="badge">Featured</span>
                                <img src={dairyMilk_img} alt="DairyMilk" />
                                <h5>DairyMilk - 1pc</h5>
                                <p className="price">40rs</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className="product-card">
                                <span className="badge">Featured</span>
                                <img src={popcorn_img} alt="Popcorn" />
                                <h5>Popcorn - 1pc</h5>
                                <p className="price">50rs</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className="product-card">
                                <span className="badge">Featured</span>
                                <img src={tomato_img} alt="Oranges" />
                                <h5>Tomato - 1kg</h5>
                                <p className="price">90rs</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className="product-card">
                                <span className="badge">Featured</span>
                                <img src={coca_cola_img} alt="Oranges" />
                                <h5>Coca-Cola - 1lt</h5>
                                <p className="price">40rs</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className="product-card">
                                <span className="badge">Featured</span>
                                <img src={apple_img} alt="Apple" />
                                <h5>Apple - 1kg</h5>
                                <p className="price">80rs</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className="product-card">
                                <span className="badge">Featured</span>
                                <img src={termaric_img} alt="Oranges" />
                                <h5>Termaric - 1kg</h5>
                                <p className="price">120rs</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Featured_Product