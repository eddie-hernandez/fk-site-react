import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductTypePage.css'
import ProductView from '../../components/productView/ProductView'

export default function ProductTypePage({ products }) {
  const { productType } = useParams()
  const [displayedType, setDisplayedType] = useState([])

  useEffect(() => {
    const matchedType = productType.toUpperCase()

    // filter products based on the productType parameter
    const specifiedType = products.filter(
      (product) => product.productType === matchedType
    )

    setDisplayedType(specifiedType)
  }, [productType, products])

  return (
    <div>
      <ProductView products={displayedType} />
    </div>
  )
}