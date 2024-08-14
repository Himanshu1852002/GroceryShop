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


const Best_Seller = () => {
    return (
        <div>
            <div className="sell-box">
                <div className="container">
                    <h2 className="text-center  mb-5">Best Selling <span>Products</span></h2>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className="best-seller-card">
                                <span className="badge">Best 👍</span>
                                <img src={annar_image} alt="Annar" />
                                <h5>Pumegranate- 1kg</h5>
                                <p className="price">60rs</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className="best-seller-card">
                                <span className="badge">Best 👍</span>
                                <img src={simla_chilli_image} alt="SimlaChilli" />
                                <h5>Shimla-Chilli - 1kg</h5>
                                <p className="price">40rs</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className="best-seller-card">
                                <span className="badge">Best 👍</span>
                                <img src={sprite_image} alt="Sprite" />
                                <h5>Sprite - 1Lt</h5>
                                <p className="price">60rs</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className="best-seller-card">
                                <span className="badge">Best 👍</span>
                                <img src={pringles_image} alt="Pringles" />
                                <h5>Pringles - 1pc</h5>
                                <p className="price">50rs</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className="best-seller-card">
                                <span className="badge">Best 👍</span>
                                <img src={orange_image} alt="Oranges" />
                                <h5>Orange - 1kg</h5>
                                <p className="price">90rs</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className="best-seller-card">
                                <span className="badge">Best 👍</span>
                                <img src={kinder_joy_image} alt="Kinder-joy" />
                                <h5>Kinder-Joy - 1pc</h5>
                                <p className="price">40rs</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className="best-seller-card">
                                <span className="badge">Best 👍</span>
                                <img src={strowberry_image} alt="strowberry" />
                                <h5>StrowBerry - 1kg</h5>
                                <p className="price">100rs</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className="best-seller-card">
                                <span className="badge">Best 👍</span>
                                <img src={oil_image} alt="Oil" />
                                <h5>Oil - 1kg</h5>
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

export default Best_Seller