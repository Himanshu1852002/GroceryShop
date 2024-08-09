// eslint-disable-next-line no-unused-vars
import React from "react";
import './Explore_Menu.css';
import fruits_img from '../Assets/Images/fruits_card.png'
import vege_img from '../Assets/Images/vege_card.png'
import chocolate_img from '../Assets/Images/choc_card.png'
import coldrink_img from '../Assets/Images/dring_card.png'
import snacks_img from '../Assets/Images/snacks_card.png'
import grocery_img from '../Assets/Images/grocery_card.png'
const Explore_Menu = () => {
    return (
        <div>
            <div className="container-fluid p-0">
                <div className="card">
                    <div className="card-body">
                        <div className="explore-menu">
                            <div className="explore-item">
                                <img src={fruits_img} alt="Fruits" />
                                <p>Fruits</p>
                            </div>
                            <div className="explore-item">
                                <img src={vege_img} alt="Vegetables" />
                                <p>Vegetable</p>
                            </div>
                            <div className="explore-item">
                                <img src={chocolate_img} alt="Chocolates" />
                                <p>Chocolate</p>
                            </div>
                            <div className="explore-item">
                                <img src={coldrink_img} alt="Dairy" />
                                <p>Coldrinks</p>
                            </div>
                            <div className="explore-item">
                                <img src={snacks_img} alt="Bakery" />
                                <p>Snacks</p>
                            </div>
                            <div className="explore-item">
                                <img src={grocery_img} alt="Bakery" />
                                <p>Grocery</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Explore_Menu