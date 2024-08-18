// eslint-disable-next-line no-unused-vars
import React from "react";
import './Explore_Menu.css';
import fruits_img from '../Assets/Images/fruits_card.png';
import vege_img from '../Assets/Images/vege_card.png';
import chocolate_img from '../Assets/Images/choc_card.png';
import coldrink_img from '../Assets/Images/dring_card.png';
import snacks_img from '../Assets/Images/snacks_card.png';
import grocery_img from '../Assets/Images/grocery_card.png';

const ExploreMenu = () => {
    const menuItems = [
        { imgSrc: fruits_img, altText: "Fruits", label: "Fruits" },
        { imgSrc: vege_img, altText: "Vegetables", label: "Vegetable" },
        { imgSrc: chocolate_img, altText: "Chocolates", label: "Chocolate" },
        { imgSrc: coldrink_img, altText: "coldrinks", label: "Coldrinks" },
        { imgSrc: snacks_img, altText: "snacks", label: "Snacks" },
        { imgSrc: grocery_img, altText: "grocery", label: "Grocery" },
    ];

    return (
        <div className="container-fluid p-0">
            <div className="card">
                <div className="card-body">
                    <div className="explore-menu">
                        {menuItems.map((item, index) => (
                            <div className="explore-item" key={index}>
                                <img src={item.imgSrc} alt={item.altText} />
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreMenu;
