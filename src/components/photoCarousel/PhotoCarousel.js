import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carousel1 from '../../assets/carousel1.jpeg';
import carousel2 from '../../assets/carousel2.jpeg';
import carousel3 from '../../assets/carousel3.jpeg';
import './PhotoCarousel.css';

export default function PhotoCarousel() {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      interval={10000}
      showThumbs={false}
      showStatus={false}
    >
      <div className="carouselSlide">
        <img src={carousel1} className="carouselimg" alt="full kit event" />
        <p className="carouselCaption">Caption 1</p>
      </div>
      <div className="carouselSlide">
        <img src={carousel2} className="carouselimg" alt="full kit past event" />
        <p className="carouselCaption">Caption 2</p>
      </div>
      <div className="carouselSlide">
        <img src={carousel3} className="carouselimg" alt="archives" />
        <p className="carouselCaption">Caption 3</p>
      </div>
    </Carousel>
  );
}
