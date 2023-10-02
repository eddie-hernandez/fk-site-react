import React from 'react'
import './Shop.css'
import ProductView from '../../components/productView/ProductView'
import AllCollections from '../../components/allCollections/AllCollections'
import EmailBreak from '../../components/emailBreak/EmailBreak'
import SectionBreak from '../../components/sectionBreak/SectionBreak'

export default function Shop({ collections, products }) {
  return (
    <div className="shopPage">
      <ProductView products={products} />
      <EmailBreak />
      <AllCollections collections={collections} />
      <SectionBreak />
    </div>
  )
}
