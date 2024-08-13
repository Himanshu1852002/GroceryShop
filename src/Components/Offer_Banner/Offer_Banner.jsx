// eslint-disable-next-line no-unused-vars
import React from "react";
import './Offer_Banner.css';
import tokri_img from '../Assets/Images/tokri.png';

const Offer_Banner = () => {
    return (

        <div className="boxes">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 mt-5 mt-md-4 mt-sm-3 boxes1">
                        <h2 className="ms-md-0 ms-sm-0">SAVE UP TO 20% <br />Organic Foods</h2>
                        <p className="ms-md-0 ms-sm-0">Start your daily shopping with some Organic Foods.</p>
                        <button className=" btn offer-btn ms-md-0 ms-sm-0">Order Now</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 boxes2">
                        <img src={tokri_img} alt />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Offer_Banner;