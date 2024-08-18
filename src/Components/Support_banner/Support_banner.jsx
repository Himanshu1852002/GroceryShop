// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Support_banner.css';
import { FaTruck } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

// Data for support banner items
const supportItems = [
    {
        icon: <FaTruck />,
        title: "Free Shipping",
        description: "On order over 1000 rs",
    },
    {
        icon: <FaMoneyBillTransfer />,
        title: "Money Return",
        description: "30 Days money return",
    },
    {
        icon: <IoIosTime />,
        title: "Support 24/7",
        description: "Call: (+91 6266059961)",
    },
    {
        icon: <AiOutlineSafetyCertificate />,
        title: "Safe Payment",
        description: "Protect online payment",
    },
];

const SupportBannerItem = ({ icon, title, description }) => (
    <div className="col-lg-3 col-md-6 col-sm-6 cards">
        <div className="card card-create">
            <a className='card-ico' href="#">{icon}</a>
            <div className="card-body body-card">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    </div>
);

const SupportBanner = () => {
    return (
        <div className="card-box">
            <div className="container">
                <div className="row">
                    {supportItems.map((item, index) => (
                        <SupportBannerItem
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SupportBanner;
