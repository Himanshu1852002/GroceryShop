// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Support_banner.css';
import { FaTruck } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
const Support_banner = () => {
    return (
        <div>
            <div className="card-box">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 cards">
                            <div className="card card-create">
                                <a className='card-ico' href=""> <FaTruck /></a>
                                <div className="card-body body-card">
                                    <h2>Free Shipping</h2>
                                    <p>On order over 1000 rs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 cards">
                            <div className="card card-create">
                                <a className='card-ico' href=""> <FaMoneyBillTransfer /></a>
                                <div className="card-body body-card">
                                    <h2>Money Return</h2>
                                    <p>30 Days money return</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 cards">
                            <div className="card card-create">
                                <a className='card-ico' href=""> <IoIosTime /></a>
                                <div className="card-body body-card">
                                    <h2>Support 24/7</h2>
                                    <p>Call :(+916266059961)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 cards">
                            <div className="card card-create">
                                <a className='card-ico' href=""><AiOutlineSafetyCertificate /></a>
                                <div className="card-body body-card">
                                    <h2>Safe Payment</h2>
                                    <p>Protect online payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Support_banner