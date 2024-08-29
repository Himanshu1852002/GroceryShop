// eslint-disable-next-line no-unused-vars
import React from "react";
import './Hero_Banner.css';
import man_img from '../Assets/Images/man.png';
const Hero_Banner = () => {
    return (
        <>
            <div className="container-fluid py-0 banner">
                <div className="row banner-content">
                    <div className="col-md-6 py-5 first-col">
                        <h1 className="display-4">Make Healthy life</h1>
                        <h1>with <span>Fresh</span></h1>
                        <h1> grocery</h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea facere nam libero corrupti aut.
                        </p>
                        <button className="btn  btn-lg">Shop now</button>
                    </div>
                    <div className="col-md-6 second-col">
                        <img
                            src={man_img}
                            alt="Hero"
                            className="img-fluid"
                            style={{ marginBottom: 0 }}
                        />
                    </div>
                </div>
                <hr />
            </div>

        </>
    )
}

export default Hero_Banner