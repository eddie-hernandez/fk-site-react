import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Rewind from '../../assets/icons/rewind.svg'
import Forward from '../../assets/icons/forward.svg'
import products from '../../products.json'
import './SingleCollection.css'
import SingleProduct from '../singleProduct/SingleProduct'

export default function SingleCollection({
  collection,
  index,
  handlePrev,
  handleNext,
  getPaginatedProducts,
}) {
  const [screenSize, setScreenSize] = useState('')

  const collectionProducts = products.filter(
    (product) => product.collection === collection.title
  )

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth

      if (width >= 1001) {
        setScreenSize('desktop')
      } else {
        setScreenSize('mobile')
      }
    }

    // initial call to handleResize
    handleResize()

    // listen for window resize events
    window.addEventListener('resize', handleResize)

    // remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const paginatedProducts = getPaginatedProducts(
    collection.title,
    collection.startIndex,
    screenSize === 'desktop' ? 3 : 2
  )
  const isFirstPage = collection.startIndex === 0
  const isLastPage =
    collection.startIndex + paginatedProducts.length ===
    collectionProducts.length

  return (
    <div className={`collectionContainer ${screenSize}`}>
      <h3 className="collectionTitle">{collection.title}</h3>
      <div className="collectionWrapper">
        <img
          src={Rewind}
          alt="rewind icon"
          className={`selectorIcon ${
            isFirstPage ? 'unavailable' : 'clickable'
          }`}
          onClick={() => !isFirstPage && handlePrev(index)}
        />
        <div
          className={`collectionProductsContainer ${
            paginatedProducts.length < 3 ? 'centered' : 'grid'
          }`}
        >
          {paginatedProducts.map((product) => (
            <SingleProduct product={product} key={product.id} />
          ))}
        </div>
        <img
          src={Forward}
          alt="forward icon"
          className={`selectorIcon ${isLastPage ? 'unavailable' : 'clickable'}`}
          onClick={() => !isLastPage && handleNext(index)}
        />
      </div>
    </div>
  )
}
