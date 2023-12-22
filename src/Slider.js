import React from 'react'
import slide from './img/1.jpg'
import slide2 from './img/2.jpg'
import slide3 from './img/3.jpg'

export const Slider = () => {
    return (

        <div id="carouselExample" className="carousel slide container">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img height={'500px'} src={slide} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img height={'500px'} src={slide2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img height={'500px'} src={slide3} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
