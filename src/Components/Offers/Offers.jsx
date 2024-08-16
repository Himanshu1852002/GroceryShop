import React from "react";
import './Offers.css'; // Ensure this CSS file contains the necessary styles
import Apple from '../Assets/Images/apple.png';
import Mango from '../Assets/Images/Mango.png';
import Lichi from '../Assets/Images/Lichi.png';
import Tomato from '../Assets/Images/tomato.png';

function Offers() {
    // Data array containing information about the fruits
    const data = [
        { FruitsName: "Mango", url: Mango, Price: 90, Offers: 20, RealPrice: 112, badge: "Offer" },
        { FruitsName: "Apple", url: Apple, Price: 80, Offers: 20, RealPrice: 100, badge: "Offer" },
        { FruitsName: "Lichi", url: Lichi, Price: 80, Offers: 20, RealPrice: 100, badge: "Offer" },
        { FruitsName: "Tomato", url: Tomato, Price: 80, Offers: 20, RealPrice: 100, badge: "Offer" },
        { FruitsName: "Banana", url: Apple, Price: 60, Offers: 15, RealPrice: 70, badge: "Offer" },
        { FruitsName: "Grapes", url: Mango, Price: 70, Offers: 10, RealPrice: 78, badge: "Offer" },
        { FruitsName: "Orange", url: Lichi, Price: 50, Offers: 5, RealPrice: 52, badge: "Offer" },
        { FruitsName: "Pineapple", url: Tomato, Price: 85, Offers: 25, RealPrice: 113, badge: "Offer" },
        
    ];

    // Function to chunk the data into arrays of a specific size
    const chunkData = (array, size) => {
        const chunked = [];
        for (let i = 0; i < array.length; i += size) {
            chunked.push(array.slice(i, i + size));
        }
        return chunked;
    };

    // Chunk the data into arrays of 4 items each (for the carousel slides)
    const slides = chunkData(data, 4);

    return (
        <div className="container-fluid">
            <div className="container">
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {slides.map((slide, index) => (
                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                <div className="row">
                                    {slide.map((item, idx) => (
                                        <div className="col-lg-3 col-md-6 col-sm-6 cards" key={idx}>
                                            <div className="card mycard" style={{ width: '20rem' }}>
                                                <img src={item.url} className="card-img-top custom-width" alt={`${item.FruitsName} Image`} style={{ margin: 'auto' }} />
                                                <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2 badge-offer">{item.badge}</span>
                                                <span className="badge bg text-dark position-absolute top-0 end-0 m-2 badge-offer">
                                                    <i className="fa fa-heart" style={{ fontSize: '24px' }} onClick={() => {/* handle like */}}></i>
                                                </span>
                                                <div className="card-body">
                                                    <div className="row">
                                                        
                                                        <h5>{item.FruitsName} :- 1kg</h5>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <h4 style={{ marginLeft: 0, padding: 0, display: 'inline' }}>₹{item.Price}</h4>
                                                            <p style={{ marginRight: 0, padding: 0, display: 'inline' }}>
                                                                <del>₹{item.RealPrice}</del>
                                                            </p>
                                                        </div>
                                                        <div className="col">
                                                            <p style={{ backgroundColor: 'coral', color: 'white' }}>{item.Offers}% Off</p>
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ marginTop: '10px' }}>
                                                        <div className="col-md">
                                                            <span className="fa fa-star" style={{ color: 'gold' }}></span>
                                                            <span className="fa fa-star" style={{ color: 'gold' }}></span>
                                                            <span className="fa fa-star" style={{ color: 'gold' }}></span>
                                                            <span className="fa fa-star" style={{ color: 'gold' }}></span>
                                                            <span className="fa fa-star"></span>
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ marginTop: '10px' }}>
                                                        <div className="col">
                                                            <button className="btn btn-primary">Buy Now</button>
                                                        </div>
                                                        <div className="col">
                                                            <button className="btn btn-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" style={{width:'20px'}} type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" style={{width:'20px'}} type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Offers;
