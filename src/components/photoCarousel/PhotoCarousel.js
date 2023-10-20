import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import carousel1 from '../../assets/carousel1.jpeg'
import carousel2 from '../../assets/carousel2.jpeg'
import carousel3 from '../../assets/carousel3.jpeg'
import carouselPrev from '../../assets/icons/carouselPrev.svg'
import carouselNext from '../../assets/icons/carouselNext.svg'
import './PhotoCarousel.css'
import { Link } from 'react-router-dom'

export default function PhotoCarousel() {
  return (
    <div className="carouselContainer">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={10000}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`custom-arrow custom-prev`}
              onClick={clickHandler}
              style={{ display: hasPrev ? 'block' : 'none' }}
            >
              <img
                className="carouselSlider"
                src={carouselPrev}
                alt="prev slider"
              />
            </div>
          )
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`custom-arrow custom-next`}
              onClick={clickHandler}
              style={{ display: hasNext ? 'block' : 'none' }}
            >
              <img
                className="carouselSlider"
                src={carouselNext}
                alt="next slider"
              />
            </div>
          )
        }}
        renderIndicator={(clickHandler, isSelected, index) => {
          return (
            <div
              onClick={clickHandler}
              key={index}
              className={`custom-indicator ${isSelected ? 'selected' : ''}`}
            ></div>
          )
        }}
      >
        <div className="carouselSlide">
          <Link to="/shop/talkingHeads">
            <div>
              <img
                src={carousel1}
                className="carouselimg"
                alt="full kit event"
              />
            </div>
          </Link>
          <div className="carouselCaptionWrapper">
            <p className="carouselCaption">
              Talking Heads Kits,{' '}
              <Link to="/shop/talkingHeads" className="carouselLink">
                <u>Available Now</u>
              </Link>
            </p>
          </div>
        </div>
        <div className="carouselSlide">
          <a
            href="https://instagram.com/fullkitwnkrs"
            rel="noreferrer"
            target="_blank"
            alt="instagram temp link"
          >
            <div>
              <img
                src={carousel2}
                className="carouselimg"
                alt="full kit past event"
              />
            </div>
          </a>
          <div className="carouselCaptionWrapper">
            <p className="carouselCaption">
              Kitted Out Halloween Party - 10/28/23
            </p>
          </div>
        </div>
        <div className="carouselSlide">
          <a
            href="https://instagram.com/fullkitwnkrs"
            rel="noreferrer"
            target="_blank"
            alt="instagram temp link"
          >
            <div>
              <img src={carousel3} className="carouselimg" alt="archives" />
            </div>
          </a>
          <div className="carouselCaptionWrapper">
            <p className="carouselCaption">
              Full Kit Night @ Saturdays Football NYC Rockefeller Center -
              8/19/23
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
