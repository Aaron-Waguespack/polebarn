import React from "react";

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BootstrapCarouselComponent extends React.Component {

render() {
    return (
        <div>
            <div className='container-fluid' >
                <div className="row">
                </div>
                <div className="row">
                    <div className="col colpad">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className=" carouselImage d-block w-100"
                                    src="/render1.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div>Design 1</div>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="carouselImage d-block w-100"
                                    src="/render2.jpg"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <div>Design 2</div>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="carouselImage d-block w-100"
                                    src="/render3.jpg"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <div>Design 3</div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
};
}

export default BootstrapCarouselComponent;