import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import products from '../../products.json'
import './ProductDetails.css'
import { MeasurementModal, WashModal } from '../productModals/ProductModals'

export default function ProductDetails() {
  const { productId } = useParams()
  const product = products.find((p) => p.id === productId)
  const [selectedSize, setSelectedSize] = useState('')
  const [availableSizes, setAvailableSizes] = useState([])
  const [openInstructions, setOpenInstructions] = useState(false)
  const [openGuide, setOpenGuide] = useState(false)

  useEffect(() => {
    if (product) {
      setAvailableSizes(product.availableSizes)
    }
  }, [product])

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="productDetailsWrapper">
      <img
        src={process.env.PUBLIC_URL + product.imageSrc}
        alt={product.title}
        className="detailedProductImg"
      />
      <div className="productDetails">
        <h2 className="detailedProductTitle">{product.title}</h2>
        <h2 className="detailedProductTitle">${product.price}</h2>
        <div className="sizeContainer">
          <p className="sizeTitle">size:</p>
          <div
            className="sizeLabelContainer"
            onClick={() => {
              if (availableSizes.includes('S')) {
                setSelectedSize('S')
              }
            }}
          >
            {availableSizes.includes('S') ? '' : <div className="none" />}
            <h3
              className={`sizeLabel ${
                selectedSize === 'S'
                  ? 'selected clickable'
                  : availableSizes.includes('S')
                  ? 'clickable'
                  : 'unavailable'
              }`}
            >
              S
            </h3>
          </div>
          <div
            className="sizeLabelContainer"
            onClick={() => {
              if (availableSizes.includes('M')) {
                setSelectedSize('M')
              }
            }}
          >
            {availableSizes.includes('M') ? '' : <div className="none" />}
            <h3
              className={`sizeLabel ${
                selectedSize === 'M'
                  ? 'selected clickable'
                  : availableSizes.includes('M')
                  ? 'clickable'
                  : 'unavailable'
              }`}
            >
              M
            </h3>
          </div>
          <div
            className="sizeLabelContainer"
            onClick={() => {
              if (availableSizes.includes('L')) {
                setSelectedSize('L')
              }
            }}
          >
            {availableSizes.includes('L') ? '' : <div className="none" />}
            <h3
              className={`sizeLabel ${
                selectedSize === 'L'
                  ? 'selected clickable'
                  : availableSizes.includes('L')
                  ? 'clickable'
                  : 'unavailable'
              }`}
            >
              L
            </h3>
          </div>
          <div
            className="sizeLabelContainer"
            onClick={() => {
              if (availableSizes.includes('XL')) {
                setSelectedSize('XL')
              }
            }}
          >
            {availableSizes.includes('XL') ? '' : <div className="none" />}
            <h3
              className={`sizeLabel ${
                selectedSize === 'XL'
                  ? 'selected clickable'
                  : availableSizes.includes('XL')
                  ? 'clickable'
                  : 'unavailable'
              }`}
            >
              XL
            </h3>
          </div>
        </div>
        <button
          className={
            selectedSize ? 'addToCart clickable' : 'addToCart unavailable'
          }
        >
          {availableSizes.length === 0 ? 'SOLD OUT' : 'ADD TO CART'}
        </button>
        <div className="otherInfoContainer">
          <WashModal
            openInstructions={openInstructions}
            setOpenInstructions={setOpenInstructions}
          />
          <MeasurementModal openGuide={openGuide} setOpenGuide={setOpenGuide} />
        </div>
      </div>
    </div>
  )
}
