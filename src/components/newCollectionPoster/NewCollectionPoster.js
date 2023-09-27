import React from 'react'
import { Link } from 'react-router-dom'
import './NewCollectionPoster.css'
import products from '../../products.json'
import FrankCollectionPoster from '../../assets/newCollectionPoster.png'

export default function NewCollectionPoster() {
  return (
    <div className="posterContainer">
      <img src={FrankCollectionPoster} alt="Frank Ocean Collection Poster" className='newCollectionPoster' />
      {/* <div className="posterContent">
        <h1 className="posterTitle">
          FOLLOWING MY DREAM,
          <br />
          HEAVEN IS GUIDING.
        </h1>
        <div className="shirtContainer">
          <div id="coKit">
            <Link to={`/shop/${products[1].id}`}>
              <img
                src={process.env.PUBLIC_URL + products[1].imageSrc}
                alt="channel orange kit"
                className="shirtImg clickable"
              />
              <p className="shirtTitle">{products[1].title}</p>
            </Link>
          </div>
          <div id="blondeKit">
            <Link to={`/shop/${products[4].id}`}>
              <img
                src={process.env.PUBLIC_URL + products[4].imageSrc}
                className="shirtImg clickable"
                alt="blonde kit"
              />
              <p className="shirtTitle">{products[4].title}</p>
            </Link>
          </div>
          <div id="frankTee">
            <Link to={`/shop/${products[11].id}`}>
              <img
                src={process.env.PUBLIC_URL + products[11].imageSrc}
                alt="Full Kit x Frank Ocean Tee"
                className="shirtImg clickable"
              />
              <p className="shirtTitle">{products[11].title}</p>
            </Link>
          </div>
        </div>
        <h1 className="posterTitle">THE FRANK OCEAN COLLECTION.</h1>
        <h3 className="posterSubtitle">AVAILABLE NOW</h3>
      </div> */}
    </div>
  )
}
