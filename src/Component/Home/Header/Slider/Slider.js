import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider2 from '../../../../images/Sliders/slide1.webp';
import slider3 from '../../../../images/Sliders/slide2.webp';
import slider4 from '../../../../images/Sliders/slide3.webp';
// import slider1 from '../../../../images/Sliders/updated/slider4.webp';
import './Slider.css'
const Slider = () => {
    return (
        <div className="">
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={slider2}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={slider3}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={slider4}
                        alt="First slide"
                    />
                </Carousel.Item>
                
            </Carousel>
        </div>
    );
};

export default Slider;