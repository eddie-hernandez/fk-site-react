import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductDetails from '../../components/productDetails/ProductDetails'
import './Product.css'

export default function Product() {
  const navigate = useNavigate()
  return (
    <div className="productPage">
      <div className="backNavigator">
        <h4 onClick={() => navigate(-1)} className="clickable">
          <span className="backArrow">&#8592;</span>BACK
        </h4>
      </div>
      <ProductDetails />
    </div>
  )
}
