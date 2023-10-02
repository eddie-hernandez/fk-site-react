import React from 'react'
import { Link } from 'react-router-dom'
import './SingleProduct.css'

export default function SingleProduct({ product }) {
  return (
    <div className="productContainer">
      <Link to={`/shop/${product.id}`}>
        <img
          src={process.env.PUBLIC_URL + product.imageSrc}
          alt={product.title}
          className="productImg clickable"
        />
        <p className="productTitle">{product.title}</p>
        <p>${product.price}</p>
      </Link>
    </div>
  )
}
