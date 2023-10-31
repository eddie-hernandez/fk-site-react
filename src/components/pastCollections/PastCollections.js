import React from 'react'
import collections from '../../collections.json'
import products from '../../products.json'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './PastCollections.css'

export default function PastCollections() {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    initialSlide: 0,
  }

  return (
    <div className="pastCollectionsWrapper">
      <h3 className="collectionTitle">
        <u>PAST COLLECTIONS</u>
      </h3>
      <Slider {...settings}>
        {collections.map((collection, index) => (
          <div key={index} className="collection-slide">
            <img src={collection.imageSrc} alt={collection.collectionTitle} />
            <div className="collection-title">
              <h6>{collection.collectionTitle}</h6>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
