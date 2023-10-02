import React, { useState, useEffect } from 'react'
import SingleCollection from '../singleCollection/SingleCollection'
import products from '../../products.json'
import './CollectionView.css'

export default function CollectionView({ collectionList }) {
  const initialCollections = collectionList.map((collectionName) => ({
    title: collectionName,
    startIndex: 0,
  }))

  console.log(initialCollections)

  const [collections, setCollections] = useState(initialCollections)

  useEffect(() => {
    setCollections(initialCollections)
  }, [collectionList])

  function getPaginatedProducts(collectionTitle, startIndex, itemsPerPage) {
    const filteredProducts = products.filter(
      (product) => product.collection === collectionTitle
    )

    return filteredProducts.slice(startIndex, startIndex + itemsPerPage)
  }

  function handlePrev(collectionIndex) {
    const newCollections = [...collections]
    const currentStartIndex = collections[collectionIndex].startIndex
    const newStartIndex = Math.max(currentStartIndex - 1, 0)
    newCollections[collectionIndex].startIndex = newStartIndex
    setCollections(newCollections)
  }

  function handleNext(collectionIndex) {
    const newCollections = [...collections]
    const currentStartIndex = collections[collectionIndex].startIndex
    const newStartIndex = Math.min(currentStartIndex + 1)

    newCollections[collectionIndex].startIndex = newStartIndex
    setCollections(newCollections)
  }

  return (
    <div className="collectionsContainer">
      {collections.map((collection, index) => (
        <SingleCollection
          key={collection.title}
          collection={collection}
          index={index}
          handlePrev={handlePrev}
          handleNext={handleNext}
          getPaginatedProducts={getPaginatedProducts}
        />
      ))}
    </div>
  )
}
