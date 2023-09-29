import React from 'react'
import './Shop.css'
import AllItems from '../../components/allItems/AllItems'
import AllCollections from '../../components/allCollections/AllCollections'
import EmailBreak from '../../components/emailBreak/EmailBreak'
import SectionBreak from '../../components/sectionBreak/SectionBreak'

export default function Shop({ collections, products }) {
  console.log(products)
  return (
    <div className="shopPage">
      <AllItems products={products} />
      <EmailBreak />
      <AllCollections collections={collections} />
      <SectionBreak />
    </div>
  )
}
