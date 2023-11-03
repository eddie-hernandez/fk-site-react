import React, { useRef, useState } from 'react'
import collections from '../../collections.json'
import Slider from 'react-slick'
import Draggable from 'react-draggable'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './PastCollections.css'

export default function PastCollections() {
  const sliderRef = useRef()
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 200,
    initialSlide: 0,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex)
    },
  }

  const getSlideStyles = (index) => {
    const distance = index - currentSlide
    const angle = distance * 30

    return {
      transform: `perspective(1000px) rotateY(${angle}deg)`,
      transition: 'transform 0.3s ease',
    }
  }

  const handleDrag = (e, ui) => {
    const sliderNode = sliderRef.current
    const movement = ui.deltaX
    if (movement < 1) {
      sliderNode.slickPrev()
    } else if (movement > -1) {
      sliderNode.slickNext()
    }
  }

  return (
    <div className="pastCollectionsWrapper">
      <h3 className="collectionTitle">
        <u>PAST COLLECTIONS</u>
      </h3>
      <div className="carouselWrapper">
        <Slider ref={sliderRef} {...settings}>
          {collections.map((collection, index) => (
            <div
              key={index}
              className="collection-slide"
              style={getSlideStyles(index)}
            >
              <img src={collection.imageSrc} alt={collection.collectionTitle} />
              <div className="collection-title">
                <h6 className="pastCollectionTitle">
                  {collection.collectionTitle}
                </h6>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="dragWrapper">
        <div className="dragHandleContainer">
          <Draggable axis="x" onDrag={handleDrag} bounds="parent">
            <div className="dragHandle" />
          </Draggable>
        </div>
      </div>
    </div>
  )
}
