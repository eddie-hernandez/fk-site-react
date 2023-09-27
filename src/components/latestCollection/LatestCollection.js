import React, { useState, useEffect } from 'react'
import './LatestCollection.css'
import { Link } from 'react-router-dom'
import Rewind from '../../assets/icons/rewind.svg'
import Forward from '../../assets/icons/forward.svg'
import products from '../../products.json'

export default function LatestCollection() {
  const [screenSize, setScreenSize] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(3)

  // extracting all collections from products.json
  const uniqueCollections = Array.from(
    new Set(products.map((product) => product.collection))
  )

  const initialCollections = uniqueCollections.map((collectionName) => ({
    title: collectionName,
    startIndex: 0,
  }))

  function handlePrev(collectionIndex) {
    const newCollections = [...collections]
    const currentStartIndex = collections[collectionIndex].startIndex

    // Calculate the new start index for the collection
    const newStartIndex = Math.max(currentStartIndex - itemsPerPage, 0)

    // If there are not enough items to display 3, adjust the start index accordingly
    if (currentStartIndex === newStartIndex && newStartIndex > 0) {
      newCollections[collectionIndex].startIndex = newStartIndex - 1
    } else {
      newCollections[collectionIndex].startIndex = newStartIndex
    }

    setCollections(newCollections)
  }

  function handleNext(collectionIndex) {
    const newCollections = [...collections]
    const currentStartIndex = collections[collectionIndex].startIndex
    const collectionTitle = collections[collectionIndex].title
    const collectionItems = products.filter(
      (product) => product.collection === collectionTitle
    )

    // calculate the new start index for the collection
    const newStartIndex = Math.min(
      currentStartIndex + itemsPerPage,
      collectionItems.length - itemsPerPage
    )

    // if there are not enough items to display 3, adjust the start index accordingly
    if (
      currentStartIndex === newStartIndex &&
      newStartIndex < collectionItems.length - itemsPerPage
    ) {
      newCollections[collectionIndex].startIndex = newStartIndex + 1
    } else {
      newCollections[collectionIndex].startIndex = newStartIndex
    }

    setCollections(newCollections)
  }

  function isPrevDisabled(collectionIndex) {
    return collections[collectionIndex].startIndex === 0
  }

  function isNextDisabled(collectionIndex) {
    return (
      collections[collectionIndex].startIndex + itemsPerPage >=
      products.filter(
        (product) => product.collection === collections[collectionIndex].title
      ).length
    )
  }

  function isFewerProductsThanMax(collectionIndex) {
    const collectionTitle = collections[collectionIndex].title
    const collectionItems = products.filter(
      (product) => product.collection === collectionTitle
    )

    return collectionItems.length < itemsPerPage
  }

  const [collections, setCollections] = useState(initialCollections)

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth

      if (width >= 1001) {
        setScreenSize('desktop')
        setItemsPerPage(3)
      } else {
        setScreenSize('mobile')
        setItemsPerPage(2)
      }
    }

    // Initial call to handleResize
    handleResize()

    // Listen for window resize events
    window.addEventListener('resize', handleResize)

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="collectionComponentContainer">
      <h2 className="pageTitle">SHOP THE LATEST</h2>
      <div className="latestCollectionContainer">
        {collections.map((collection, index) => (
          <div key={index} className={`collectionContainer ${screenSize}`}>
            <h3 className="collectionTitle">{collection.title}</h3>
            <div className="collectionWrapper">
              <img
                src={Rewind}
                alt="rewind icon"
                className={`selectorIcon ${
                  isPrevDisabled(index) ? 'unavailable' : 'clickable'
                }`}
                onClick={() => !isPrevDisabled(index) && handlePrev(index)}
              />
              <div
                className={`collectionProductsContainer ${
                  isFewerProductsThanMax(index) ? 'centered' : 'grid'
                }`}
              >
                {products
                  .filter((product) => product.collection === collection.title)
                  .slice(
                    collection.startIndex,
                    collection.startIndex + itemsPerPage
                  )
                  .map((product) => (
                    <div key={product.id} className="productContainer">
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
                  ))}
              </div>
              <img
                src={Forward}
                alt="forward icon"
                className={`selectorIcon ${
                  isNextDisabled(index) ? 'unavailable' : 'clickable'
                }`}
                onClick={() => !isNextDisabled(index) && handleNext(index)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
