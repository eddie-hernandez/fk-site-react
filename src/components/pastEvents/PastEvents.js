import React, { useRef, useState } from 'react'
import events from '../../events.json'
import Slider from 'react-slick'
import Draggable from 'react-draggable'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './PastEvents.css'

export default function PastEvents() {
  const sliderRef = useRef()
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    initialSlide: 0,
    arrows: false,
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
    <div className="pastEventsWrapper">
      <h3 className="collectionTitle">
        <u>PAST EVENTS</u>
      </h3>
      <div className="carouselWrapper">
        <Slider ref={sliderRef} {...settings}>
          {events.map((event, index) => (
            <div key={index} className="event-slide">
              <img src={event.imageSrc} alt={event.eventTitle} />
              <div className="event-title">
                <h6 className="pastEventTitle">{event.eventTitle}</h6>
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
