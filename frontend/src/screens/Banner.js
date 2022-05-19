import React from "react";

import { Carousel } from "react-bootstrap";


const Banner=()=>{
    return(

<Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src=" https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
      alt="Second slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
      alt="Third slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default Banner;