import React from 'react'
import events from '../../events.json'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './PastEvents.css'

export default function PastEvents() {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    initialSlide: 0,
  }

  return (
    <div className="pastEventsWrapper">
      <h3 className="collectionTitle">
        <u>PAST EVENTS</u>
      </h3>
      <Slider {...settings}>
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
  )
}
