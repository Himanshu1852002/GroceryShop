import React from 'react';
import './Offers.css';
import apple_img from '../Assets/Images/Mango.png';
import mango_img from '../Assets/Images/Mango.png';

import apple2_img from '../Assets/Images/Mango.png';

const Offers = () => {
  const handleLike = () => {
    // Implement like functionality here
  };

  const images = [apple_img, mango_img, apple2_img];
  const offers = [
    { title: 'Diwali Sale | Up To 45% Off', price: '₹80', originalPrice: '₹120', discount: '40% Off' },
    // Add more offers if needed
  ];

  return (
    <>
      {offers.length > 0 && (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {offers.map((offer, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="container">
                  <div className="row">
                    {images.map((img, i) => (
                      <div key={i} className="col" id="col-card">
                        <div className="card" style={{ width: '20rem' }}>
                          <img src={img} className="card-img-top custom-width" alt="Product" style={{ margin: 'auto' }} />
                          <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2 badge-offer">Offer</span>
                          <span className="badge bg text-dark position-absolute top-0 end-0 m-2 badge-offer">
                            <i className="fa fa-heart" id="like" style={{ fontSize: '24px' }} onClick={handleLike}></i>
                          </span>
                          <div className="card-body">
                            <h5>Offer: {offer.title}</h5>
                            <div className="row">
                              <div className="col">
                                <h4 style={{ marginLeft: 0, padding: 0, display: 'inline' }}>{offer.price}</h4>
                                <p style={{ marginRight: 0, padding: 0, display: 'inline' }}><del>{offer.originalPrice}</del></p>
                              </div>
                              <div className="col">
                                <p style={{ backgroundColor: 'coral', color: 'white' }}>{offer.discount}</p>
                              </div>
                            </div>
                            <div className="row">
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
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={{ width: '20px' }}>
            <span className="carousel-control-prev-icon" aria-hidden="true" style={{ color: 'chartreuse' }}></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style={{ width: '20px' }}>
            <span className="carousel-control-next-icon" aria-hidden="true" style={{ color: 'chartreuse' }}></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Offers;
