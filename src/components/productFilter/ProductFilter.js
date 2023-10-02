import React, { useState, useRef, useEffect } from 'react'
import './ProductFilter.css'

export default function ProductFilter({ onFilterChange, products, filters }) {
  const [isFilterClicked, setIsFilterClicked] = useState(false)
  const [isSortClicked, setIsSortClicked] = useState(false)
  const filterContainerRef = useRef(null)

  const productTypes = Array.from(
    new Set(products.map((product) => product.productType))
  )

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        filterContainerRef.current &&
        !filterContainerRef.current.contains(event.target)
      ) {
        setIsFilterClicked(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  function toTitleCase(str) {
    return str
      .split(' ')
      .map((word) => {
        if (word.includes('&')) {
          return word
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }
      })
      .join(' ')
  }

  const typeList = Array.from(
    new Set(products.map((product) => product.productType))
  )

  const collectionList = Array.from(
    new Set(products.map((product) => product.collection))
  )

  const titleCaseTypeList = typeList.map((type) => toTitleCase(type))
  const titleCaseCollectionList = collectionList.map((collection) =>
    toTitleCase(collection)
  )

  // function to reset filters to their initial state
  function resetFilters() {
    onFilterChange({
      type: '',
      priceOrder: '',
      collection: '',
    })
  }

  return (
    <div
      className={`filterDropdownContainer ${
        isFilterClicked
          ? 'activeWrapper stickyWrapper'
          : '' || isSortClicked
          ? 'activeWrapper stickyWrapper'
          : ''
      }`}
      ref={filterContainerRef}
    >
      <div
        className={`filtersWrapper ${
          isFilterClicked
            ? 'active'
            : 'inactive' || isSortClicked
            ? 'active'
            : 'inactive'
        }`}
      >
        {!isFilterClicked && !isSortClicked ? (
          ''
        ) : (
          <>
            {productTypes.length > 1 && !isSortClicked && (
              <>
                <div className="filterContainer">
                  <label htmlFor="typeFilter" className="filterLabel">
                    Type:
                  </label>
                  <select
                    className="clickable"
                    id="typeFilter"
                    value={filters.type}
                    onChange={(event) =>
                      onFilterChange({
                        ...filters,
                        type: event.target.value,
                      })
                    }
                  >
                    {/* <option value="" disabled hidden>
              Type
            </option> */}
                    <option value="">All</option>
                    {titleCaseTypeList.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  className={
                    isSortClicked
                      ? ''
                      : productTypes.length > 1
                      ? 'filterSeparator'
                      : ''
                  }
                />
              </>
            )}
            {!isSortClicked && (
              <div className="filterContainer">
                <label htmlFor="collectionFilter" className="filterLabel">
                  Collection:
                </label>
                <select
                  className="clickable"
                  id="collectionFilter"
                  value={filters.collection}
                  onChange={(event) =>
                    onFilterChange({
                      ...filters,
                      collection: event.target.value,
                    })
                  }
                >
                  {/* <option value="" disabled hidden>
              Collection
            </option> */}
                  <option value="">All</option>
                  {titleCaseCollectionList.map((collection) => (
                    <option key={collection} value={collection}>
                      {collection}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div
              className="filterContainer"
              style={{
                display: isSortClicked ? 'flex' : 'none',
              }}
            >
              <label htmlFor="priceOrderFilter" className="filterLabel">
                Price Order:
              </label>
              <select
                className="clickable"
                id="priceOrderFilter"
                value={filters.priceOrder}
                onChange={(event) =>
                  onFilterChange({
                    ...filters,
                    priceOrder: event.target.value,
                  })
                }
              >
                {/* <option value="" disabled hidden>
              Price Order
            </option> */}
                <option value="">Default</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>
            <button
              onClick={resetFilters}
              className={`resetFilters ${
                filters.type || filters.collection || filters.priceOrder
                  ? 'clickable'
                  : 'unavailable'
              } `}
              style={{
                display: isSortClicked ? 'none' : 'flex',
              }}
            >
              reset filters
            </button>
          </>
        )}
      </div>
      <div className="filterTitle">
        <div className="blankDiv" />
        <div className="filterItems">
          <h4
            className="clickable"
            onClick={() => {
              setIsFilterClicked(!isFilterClicked)
              setIsSortClicked(false)
            }}
          >
            {isFilterClicked ? 'filter -' : 'filter +'}
          </h4>
          <h4>/</h4>
          <h4
            className="clickable"
            onClick={() => {
              setIsSortClicked(!isSortClicked)
              setIsFilterClicked(false)
            }}
          >
            {isSortClicked ? 'sort -' : 'sort +'}
          </h4>
        </div>
        <div
          className="closerWrapper"
          onClick={() => {
            setIsSortClicked(false)
            setIsFilterClicked(false)
          }}
        >
          {isFilterClicked || isSortClicked ? (
            <>
              <div className="bar" />
              <div className="bar" />
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}
