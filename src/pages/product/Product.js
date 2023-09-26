import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductDetails from '../../components/productDetails/ProductDetails'
import './Product.css'
import EmailBreak from '../../components/emailBreak/EmailBreak'

export default function Product() {
  const navigate = useNavigate()

  function navBack() {
    navigate(-1)
  }

  return (
    <div className="productPage">
      <div className="backNavigator">
        <h4 onClick={navBack} className="clickable">
          <span className="backArrow">&#8592;</span>BACK
        </h4>
      </div>
      <ProductDetails />
      <EmailBreak />
    </div>
  )
}
