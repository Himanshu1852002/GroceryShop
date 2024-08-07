
// eslint-disable-next-line no-unused-vars
import React from "react";
import './Navbar.css'
import logo_img from '../Assets/Images/basketgreen.png'
import logo_text from '../Assets/Images/greenbaket.png'
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid nav-container">
                    <a className="navbar-brand" href="#">
                        <img src={logo_img} alt="Logo" style={{ width: 40 }} />
                        <img src={logo_text} alt />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span><IoMenu /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Product
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Fruits</a></li>
                                    <li><a className="dropdown-item" href="#">Vegetables</a></li>
                                    <li><a className="dropdown-item" href="#">Drinks</a></li>
                                    <li><a className="dropdown-item" href="#">Snacks</a></li>
                                    <li><a className="dropdown-item" href="#">Chocolates</a></li>
                                    <li><a className="dropdown-item" href="#">Grocery</a></li>
                                </ul>
                            </li>
                            <li><a className="nav-link" href="#">Offers</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                    <li><a className="dropdown-item" href="#">About</a></li>
                                    <li><a className="dropdown-item" href="#">Blogs</a></li>
                                    <li><a className="dropdown-item" href="#">Contact</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex search-box">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn" type="submit">
                                Search
                            </button>
                        </form>
                        <ul className="navbar-nav ms-3">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><FaHeart /><span className="badge bg-light text-dark">0</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><FaShoppingCart /><span className="badge  bg-light text-dark">0</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><FaUser /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>



    );
};

export default Navbar