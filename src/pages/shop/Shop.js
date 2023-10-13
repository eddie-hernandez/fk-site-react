import React from 'react'
import './Shop.css'
import ProductView from '../../components/productView/ProductView'
import AllCollections from '../../components/allCollections/AllCollections'
import EmailBreak from '../../components/emailBreak/EmailBreak'
import SectionBreak from '../../components/sectionBreak/SectionBreak'
import { useLocation } from 'react-router-dom'

export default function Shop({ collections, products }) {
  const location = useLocation()

  const locationTitle = location.pathname.split('/').pop()

  return (
    <div className="shopPage">
      {locationTitle === 'products' ? (
        <>
          <ProductView products={products} />
          <EmailBreak />
        </>
      ) : locationTitle === 'collections' ? (
        <>
          <AllCollections collections={collections} />
          <SectionBreak />
        </>
      ) : (
        ''
      )}
    </div>
  )
}
