import React from 'react'
import './LatestCollection.css'
import { Link } from 'react-router-dom'
import Rewind from '../../assets/icons/rewind.svg'
import Forward from '../../assets/icons/forward.svg'
import products from '../../products.json'

export default function LatestCollection() {
  return (
    <div className='collectionComponentContainer'>
      <div className="latestCollectionContainer">
        <h2 className="pageTitle">SHOP THE LATEST</h2>
        <h3 className="collectionTitle">THE FRANK OCEAN COLLECTION.</h3>
        <div className="collectionContainer">
          <img src={Rewind} alt="rewind icon" className="selectorIcon" />
          <div className="productContainer">
            <Link to={`/shop/${products[1].id}`}>
              <img
                src={process.env.PUBLIC_URL + products[1].imageSrc}
                alt="channel orange kit"
                className="productImg clickable"
              />
              <p className="productTitle">
                {products[1].title}
                <br />${products[1].price}
              </p>
            </Link>
          </div>
          <div className="productContainer">
            <Link to={`/shop/${products[4].id}`}>
              <img
                src={process.env.PUBLIC_URL + products[4].imageSrc}
                alt="blonde kit"
                className="productImg clickable"
              />
              <p className="productTitle">
                {products[4].title}
                <br />${products[4].price}
              </p>
            </Link>
          </div>
          <div className="productContainer">
            <Link to={`/shop/${products[11].id}`}>
              <img
                src={process.env.PUBLIC_URL + products[11].imageSrc}
                alt="frank tee"
                className="productImg clickable"
              />
              <p className="productTitle">
                {products[11].title}
                <br />${products[11].price}
              </p>
            </Link>
          </div>
          <img src={Forward} alt="forward icon" className="selectorIcon" />
        </div>
        <h3 className="collectionTitle">THE ELECTRONIC DANCE COLLECTION.</h3>
        <div className="collectionContainer">
          <img src={Rewind} alt="rewind icon" className="selectorIcon" />
          <div className="productContainer">
            <Link to={`/shop/${products[3].id}`}>
              <img
                src={process.env.PUBLIC_URL + products[3].imageSrc}
                alt="bad tuner jersey"
                className="productImg clickable"
              />
              <p className="productTitle">
                {products[3].title}
                <br />${products[3].price}
              </p>
            </Link>
          </div>
          <div className="productContainer">
            <Link to={`/shop/${products[16].id}`}>
              <img
                src={process.env.PUBLIC_URL + products[16].imageSrc}
                alt="justice jersey"
                className="productImg clickable"
              />
              <p className="productTitle">
                {products[16].title}
                <br />${products[16].price}
              </p>
            </Link>
          </div>
          <div className="productContainer">
            <Link to={`/shop/${products[6].id}`}>
              <img
                src={process.env.PUBLIC_URL + products[6].imageSrc}
                alt="calvin harris jersey"
                className="productImg clickable"
              />
              <p className="productTitle">
                {products[6].title}
                <br />${products[6].price}
              </p>
            </Link>
          </div>
          <img src={Forward} alt="forward icon" className="selectorIcon" />
        </div>
      </div>
    </div>
  )
}
